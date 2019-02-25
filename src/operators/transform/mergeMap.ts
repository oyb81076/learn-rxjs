import { interval } from "rxjs";
import { mapTo, mergeMap, take } from "rxjs/operators";

interval(100)
  .pipe(take(3))
  .pipe(mergeMap((x) => interval(10).pipe(take(3)).pipe(mapTo(x))))
  .subscribe(console.log);
  