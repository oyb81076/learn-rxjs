import { interval, range } from "rxjs";
import { repeat, take, toArray } from "rxjs/operators";

range(0, 4)
  .pipe(repeat(2))
  .pipe(toArray())
  .subscribe(console.log);

interval(100)
  .pipe(take(5))
  .pipe(repeat(2)).subscribe(console.log);
