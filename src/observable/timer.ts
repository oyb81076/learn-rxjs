import { timer } from "rxjs/internal/observable/timer";
import { startWith } from "rxjs/internal/operators/startWith";
import { take } from "rxjs/internal/operators/take";
timer(2000).pipe(startWith(-1)).subscribe(console.log);
timer(1000).subscribe(() => console.log("once"));
timer(1000, 100)
  .pipe(take(5))
  .subscribe(() => { console.log("start, interval"); });
