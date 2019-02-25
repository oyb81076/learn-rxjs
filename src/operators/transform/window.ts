import { interval } from "rxjs";
import { delay, mergeMap, take, takeLast, window } from "rxjs/operators";

const source = interval(100);
// 每间隔 1000 显示 source 中最近的两个数值
source.pipe(
  window(interval(500)),
  mergeMap(take(2)),
).pipe(take(10)).subscribe(console.log);

source.pipe(delay(2000))
  .pipe(window(interval(500)))
  .pipe(mergeMap(takeLast(2)))
  .pipe(take(10))
  .subscribe(console.log);
