import { interval, of, throwError } from "rxjs";
import { mergeMap, retry } from "rxjs/operators";

interval(1000)
  .pipe(mergeMap((x) => {
    if (x === 4) {
      return throwError("err");
    }
    return of("curr:" + x);
  }))
  .pipe(retry(2))
  .subscribe(console.log, console.error);
