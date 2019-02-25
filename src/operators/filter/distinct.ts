import { of } from "rxjs/internal/observable/of";
import { distinct, map, toArray } from "rxjs/operators";
of(1, 2, 3, 4, 5, 6)
  .pipe(distinct((v) => v % 3))
  .pipe(toArray())
  .subscribe(console.log);

of(1, 2, 1, 2, 1, 2)
  .pipe(distinct())
  .pipe(toArray())
  .subscribe(console.log);
