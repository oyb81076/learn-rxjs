import { interval, timer } from "rxjs";
import { mergeAll, windowToggle } from "rxjs/operators";

interval(100)
  .pipe(windowToggle(interval(1000), () => timer(300)))
  .pipe(mergeAll())
  .subscribe(console.log);
