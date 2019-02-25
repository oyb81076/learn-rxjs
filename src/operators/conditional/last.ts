import { interval, range } from "rxjs";
import { last, timeout } from "rxjs/operators";

range(0, 3)
  .pipe(last())
  .subscribe(console.log);

interval(100)
  .pipe(last())
  .pipe(timeout(2000))
  .subscribe(console.log, console.error);
