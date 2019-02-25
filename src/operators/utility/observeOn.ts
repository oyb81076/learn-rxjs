import { asyncScheduler, range, Scheduler, SchedulerLike } from "rxjs";
import { map, observeOn } from "rxjs/operators";

range(0, 5)
  .pipe(map((x) => `async:${x}`))
  .pipe(observeOn(asyncScheduler, 1000))
  .subscribe(console.log);

console.log("after");
