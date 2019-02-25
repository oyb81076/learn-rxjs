import { interval } from "rxjs";
import { auditTime, take } from "rxjs/operators";

interval(10)
  .pipe(auditTime(50))
  .pipe(take(10))
  .subscribe(console.log);
