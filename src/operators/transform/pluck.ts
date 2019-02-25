import { of } from "rxjs";
import { pluck } from "rxjs/operators";

of({ a: { b: 1 } }, { b: 1 }, { a: 2 })
  .pipe(pluck("a", "b"))
  .subscribe(console.log)
;
