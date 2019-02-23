import { pairs } from "rxjs/internal/observable/pairs";
test("pairs", (cb) => {
  const expected = [["a", 1], ["b", 2], ["c", 3]];
  pairs({ a: 1, b: 2, c: 3 }).subscribe((v) => {
    expect(v).toEqual(expected.shift());
  }, null, cb);
});
