// 从流结束之前会忽略主流的输入
import { interval } from "rxjs/internal/observable/interval";
import { exhaustMap, map, take } from "rxjs/operators";

interval(30)
  .pipe(exhaustMap((x) => interval(10).pipe(take(5)).pipe(map((v) => `${x}:${v}`))))
  .subscribe(console.log);
