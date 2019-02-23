import { empty } from "rxjs/internal/observable/empty";
import { of } from "rxjs/internal/observable/of";
import { range } from "rxjs/internal/observable/range";
import { zip } from "rxjs/internal/observable/zip";
describe("zip", () => {
  test("zip", (cb) => {
    const expected = [[1, "a"], [2, "b"]];
    zip(
      range(1, 100),
      of("a", "b"),
    ).subscribe((v) => {
      expect(v).toEqual(expected.shift());
    }, null, cb);
  });
  test("empty", (cb) => {
    zip(
      range(1, 100),
      empty(),
    ).subscribe(() => cb.fail(), null, cb);
  });
});
