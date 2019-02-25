import { range } from "rxjs";
import { count, groupBy, map, mergeAll, toArray } from "rxjs/operators";

range(0, 5)
  .pipe(groupBy((x) => x % 2))
  .pipe(count())
  .subscribe(console.log);

range(0, 6)
  .pipe(groupBy((x) => x % 2))
  .pipe(map((group$) => group$.pipe(toArray())))
  .pipe(mergeAll())
  .subscribe(console.log);
