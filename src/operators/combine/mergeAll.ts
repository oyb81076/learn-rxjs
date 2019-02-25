import { of, range } from "rxjs";
import { map, mergeAll } from "rxjs/operators";

range(0, 4)
  .pipe(map((x) => of(x)))
  .pipe(mergeAll())
  .subscribe(console.log);
