import { concat } from "rxjs/internal/observable/concat";
import { of } from "rxjs/internal/observable/of";
import { delay } from "rxjs/internal/operators/delay";
test("concat", (cb) => {
  const expected = [1, 2, 3, 4, 5, 6];
  concat(
    of(1, 2, 3).pipe(delay(5)),
    of(4, 5, 6),
  ).subscribe((v) => {
    expect(v).toBe(expected.shift());
  }, null, cb);
});
