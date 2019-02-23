import { combineLatest } from "rxjs/internal/observable/combineLatest";
import { interval } from "rxjs/internal/observable/interval";
import { of } from "rxjs/internal/observable/of";
import { take } from "rxjs/internal/operators/take";
test("combineLatest", (cb) => {
  const expected = [[0, 3], [1, 3]];
  combineLatest(
    interval(5).pipe(take(2)),
    of(3),
  ).subscribe((arr) => {
    expect(arr).toEqual(expected.shift());
  }, null, cb);
});
