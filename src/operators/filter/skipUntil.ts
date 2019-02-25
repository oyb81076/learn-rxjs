import { interval } from "rxjs";
import { skipUntil, take } from "rxjs/operators";

interval(100)
  .pipe(skipUntil(interval(300)))
  .pipe(take(5))
  .subscribe(console.log);
