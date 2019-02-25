import { range } from "rxjs";
import { findIndex } from "rxjs/operators";

range(0, 4)
  .pipe(findIndex((x) => x !== 0))
  .subscribe(console.log)
  ;
