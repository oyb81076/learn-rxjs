import { range } from "rxjs";
import { skipWhile, toArray } from "rxjs/operators";

range(5)
  .pipe(skipWhile((x) => x % 2 === 0))
  .pipe(toArray())
  .subscribe(console.log);
