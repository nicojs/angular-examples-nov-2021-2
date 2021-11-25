import net from 'net';
import http from 'http';
import childProcess from 'child_process';
import os from 'os';
import kill from 'tree-kill';

let ngServe: childProcess.ChildProcess | undefined;
let jsonServer: childProcess.ChildProcess | undefined;
const ngServePort = 4200;
const jsonServerPort = 3000;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100_000;

beforeAll(async () => {
  if (!(await isInUse(jsonServerPort))) {
    jsonServer = childProcess.spawn(
      os.platform() === 'win32' ? 'npm.cmd' : 'npm',
      ['run', 'start:backend'],
      { stdio: 'inherit' }
    );
    jsonServer.on('error', (err) => {
      console.error(err);
    });
    jsonServer.on('exit', () => {
      console.log('✅ json-server killed');
    });
  } else {
    console.log('✅ json-server already running');
  }
  if (!(await isInUse(ngServePort))) {
    ngServe = childProcess.spawn(
      os.platform() === 'win32' ? 'npm.cmd' : 'npm',
      ['start'],
      { stdio: 'inherit' }
    );
    ngServe.on('error', (err) => {
      console.error(err);
    });
    ngServe.on('exit', () => {
      console.log('✅ ng serve killed');
    });
    await whenIndexReady();
  } else {
    console.log('✅ ng serve already running');
  }
});
afterAll(() => {
  if (jsonServer) {
    kill(jsonServer.pid);
    console.log('✅ Killing jsonServer');
  }
  if (ngServe) {
    kill(ngServe.pid);
    console.log('✅ Killing ngServe');
  }
});

function isInUse(port: number) {
  return new Promise<boolean>((res) => {
    const socket = net.connect(port);
    socket.on('connect', () => res(true));
    socket.on('error', () => res(false));
    socket.unref();
  });
}

async function whenIndexReady(): Promise<void> {
  const url = `http://localhost:${ngServePort}`;
  console.log(`Waiting for ${url} to come to life`);
  try {
    while (!(await tryGet(url))) {
      process.stdout.write('.');
      await sleep();
    }
    console.log(' GOT IT!');
  } catch (err) {
    console.error(err);
  }
}

function tryGet(url: string): Promise<boolean> {
  return new Promise((res) => {
    http
      .get(url, (response) => {
        res(response.statusCode === 200);
      })
      .on('error', (e) => {
        return res(false);
      });
  });
}

function sleep(n = 1000) {
  return new Promise((res) => setTimeout(res, n));
}
