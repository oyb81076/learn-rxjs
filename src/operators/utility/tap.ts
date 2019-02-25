import { of } from "rxjs/internal/observable/of";
import { concatMap } from "rxjs/internal/operators/concatMap";
import { delay } from "rxjs/internal/operators/delay";
import { tap } from "rxjs/internal/operators/tap";
of(0, 1, 2, 3)
  .pipe(tap((v) => console.log("tap1:" + v)))
  .pipe(concatMap((x) => of(-x).pipe(delay(1000))))
  .pipe(tap((v) => console.log("tap2:" + v)))
  .subscribe(console.log)
  ;
