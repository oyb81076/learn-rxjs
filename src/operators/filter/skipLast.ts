import { interval } from "rxjs";
import { skipLast, take } from "rxjs/operators";

interval(300)
  .pipe(take(10))
  .pipe(skipLast(5))
  .subscribe(console.log);
