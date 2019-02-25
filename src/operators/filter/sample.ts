import { interval } from "rxjs";
import { sample, take } from "rxjs/operators";

// pipe(sample(click$)) // 当 source的时候 提取
interval(100)
  .pipe(sample(interval(400)))
  .pipe(take(5))
  .subscribe(console.log);
