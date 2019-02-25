import { of, range } from "rxjs";
import { map, zipAll } from "rxjs/operators";

range(1, 4)
  .pipe(map((x) => of("a" + x, "b" + x)))
  .pipe(zipAll())
  .subscribe(console.log)
  ;
