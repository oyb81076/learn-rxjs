import { interval, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";

interval(100)
  .pipe(takeUntil(timer(1000)))
  .subscribe(console.log);
