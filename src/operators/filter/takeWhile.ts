import { range } from "rxjs";
import { takeWhile } from "rxjs/operators";

range(10)
  .pipe(takeWhile((x) => x < 3 || x > 10))
  .subscribe(console.log);
