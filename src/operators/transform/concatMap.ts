import { of } from "rxjs/internal/observable/of";
import { range } from "rxjs/internal/observable/range";
import { concatMap } from "rxjs/internal/operators/concatMap";
import { delay } from "rxjs/internal/operators/delay";
import { mergeMap } from "rxjs/internal/operators/mergeMap";
range(1, 10)
  .pipe(mergeMap((v) => of("merge:" + v).pipe(delay(1000))))
  .subscribe(console.log);

range(1, 10)
  .pipe(concatMap((v) => of("concat:" + v).pipe(delay(1000))))
  .subscribe(console.log);
