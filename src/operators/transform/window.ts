import { interval } from "rxjs";
import { map, mergeAll, take, window } from "rxjs/operators";

const source = interval(100)
  .pipe(map((x) => "click:" + x));
// 每间隔 1000 显示 source 中最近的两个数值
source.pipe(
    window(interval(1000)),
    map((win) => win.pipe(take(2))),
    mergeAll(),
  )
  .subscribe(console.log);
