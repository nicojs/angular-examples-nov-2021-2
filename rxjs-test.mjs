// @ts-check
import { of, map, range, mergeMap, timer, catchError, tap, switchMap } from "rxjs";

function sleep(n = 1000) {
  return new Promise((res) => {
    setTimeout(res, n);
  });
}

async function doFetch(n) {
  await sleep(n * 100);
  return 'HTTP Result ' + n;
}

const number$ = of(3, 2, 1).pipe(
  map((n) => n * 2),
  tap((n) => {
    console.log("Debugging, ", n);
  }),
  switchMap((n) => {
    return doFetch(n);
  })
);

const subscription = number$.subscribe({
  next(n) {
    console.log(n);
  },
  complete() {
    finallyDoThis();
  },
  error(err) {
    console.error("Handled error", err);
    finallyDoThis();
  },
});

subscription.unsubscribe();

function finallyDoThis() {
  console.log("Done emitting values!");
}
