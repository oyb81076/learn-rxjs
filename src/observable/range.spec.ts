import { range } from "rxjs/internal/observable/range";
test("range", (cb) => {
  const expected = [1, 2, 3, 4];
  range(1, 4).subscribe((v) => {
    expect(v).toBe(expected.shift());
  }, cb.fail, cb);
});
