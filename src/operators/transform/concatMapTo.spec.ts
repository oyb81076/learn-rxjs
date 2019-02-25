import { of } from "rxjs/internal/observable/of";
import { range } from "rxjs/internal/observable/range";
import { concatMapTo } from "rxjs/internal/operators/concatMapTo";
test("concatMapTo", () => {
  const expected = [0, 0, 0];
  range(0, 3).pipe(concatMapTo(of(0)))
    .subscribe((v) => {
      expect(v).toBe(expected.shift());
    });
  expect(expected.length).toBe(0);
});
