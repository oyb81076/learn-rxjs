import { range } from "rxjs/internal/observable/range";
test("range(a,b)", (cb) => {
  const expected = [1, 2, 3, 4];
  range(1, 4).subscribe((v) => {
    expect(v).toBe(expected.shift());
  }, cb.fail, cb);
});

test("range(a)", (cb) => {
  const expected = [0, 1, 2, 3];
  range(4).subscribe((v) => {
    expect(v).toBe(expected.shift());
  }, cb.fail, cb);
});
