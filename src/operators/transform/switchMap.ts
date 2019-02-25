import { interval, of, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";

interval(1000)
  .pipe(switchMap((x) => interval(100).pipe(map((k) => `${x}:${k}`))))
  .subscribe(console.log);
