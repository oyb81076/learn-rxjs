import { interval } from "rxjs";
import { sampleTime, take } from "rxjs/operators";

interval(100)
  .pipe(sampleTime(400))
  .pipe(take(5))
  .subscribe(console.log);
