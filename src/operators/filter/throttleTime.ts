import { interval } from "rxjs";
import { take, throttleTime } from "rxjs/operators";

interval(10)
  .pipe(throttleTime(50))
  .pipe(take(10))
  .subscribe(console.log);
