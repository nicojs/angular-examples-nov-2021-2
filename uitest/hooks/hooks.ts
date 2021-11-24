import net from 'net';
import childProcess from 'child_process';

beforeAll(async () => {
  const port = 4200;
  if (!(await isInUse(port))) {
    
  }
});
afterAll(() => {
  console.log('after all!!');
});



function isInUse(port: number) {
  return new Promise<boolean>((res) => {
    const socket = net.connect(port);
    socket.on('connect', () => res(true));
    socket.on('error', () => res(false));
    socket.unref();
  });
}
