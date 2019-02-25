import { interval } from "rxjs";
import { mergeMap, take, window, windowTime } from "rxjs/operators";

const source = interval(100);
// 每间隔 1000 显示 source 中最近的两个数值
source.pipe(
  windowTime(500),
  mergeMap(take(2)),
  take(8),
).subscribe(console.log);
