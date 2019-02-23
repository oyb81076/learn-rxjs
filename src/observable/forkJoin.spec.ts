import { forkJoin } from "rxjs/internal/observable/forkJoin";
import { interval } from "rxjs/internal/observable/interval";
import { take } from "rxjs/internal/operators/take";

// 获取 source complete 前最后发出的值
test("forkJoin", (cb) => {
  forkJoin(
    interval(100).pipe(take(3)),
    interval(40).pipe(take(5)),
  ).subscribe((arr) => {
    expect(arr).toEqual([2, 4]);
  }, null, cb);
});
