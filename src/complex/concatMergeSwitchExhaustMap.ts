import { interval, timer } from "rxjs";
import { concatMap, exhaustMap, map, mergeMap, switchMap, take, toArray } from "rxjs/operators";

timer(0, 250)
  .pipe(take(3))
  .pipe(concatMap((a) => interval(100).pipe(take(5)).pipe(map((b) => `concat:${a}:${b}`))))
  .subscribe(console.log);

timer(3000, 250)
  .pipe(take(3))
  .pipe(mergeMap((a) => timer(0, 100).pipe(take(5)).pipe(map((b) => `merge:${a}:${b}`))))
  .subscribe(console.log);

timer(6000, 250)
  .pipe(take(3))
  .pipe(switchMap((a) => timer(0, 100).pipe(take(5)).pipe(map((b) => `switch:${a}:${b}`))))
  .subscribe(console.log);

timer(9000, 250)
  .pipe(take(3))
  .pipe(exhaustMap((a) => timer(0, 100).pipe(take(5)).pipe(map((b) => `exhaust:${a}:${b}`))))
  .subscribe(console.log);
