import { interval } from "rxjs";
import { take, timestamp } from "rxjs/operators";

interval(100)
  .pipe(timestamp())
  .pipe(take(3))
  .subscribe(console.log);
