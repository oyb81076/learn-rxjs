import { range } from "rxjs";
import { skip, toArray } from "rxjs/operators";

range(10)
  .pipe(skip(5))
  .pipe(toArray())
  .subscribe(console.log);
