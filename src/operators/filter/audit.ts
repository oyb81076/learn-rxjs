import { interval, timer } from "rxjs";
import { audit, take } from "rxjs/operators";

interval(10)
  .pipe(audit(() => timer(50)))
  .pipe(take(10))
  .subscribe(console.log);
