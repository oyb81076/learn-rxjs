import { interval } from "rxjs";
import { map, switchAll } from "rxjs/operators";

interval(1000)
  .pipe(map((x) => interval(100).pipe(map((k) => `${x}:${k}`))))
  .pipe(switchAll())
  .subscribe(console.log);
