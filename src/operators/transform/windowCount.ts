import { interval } from "rxjs";
import {  mergeAll, take, windowCount } from "rxjs/operators";

const source = interval(200);
// 每间隔 1000 显示 source 中最近的两个数值
source.pipe(
  windowCount(2, 5),
  mergeAll(),
  take(8),
).subscribe(console.log);
