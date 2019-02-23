import { of } from "rxjs/internal/observable/of";
test("should be 1 2 3", (done) => {
  const expected = [1, 2, 3];
  of(...expected).subscribe((v) => {
    expect(v).toBe(expected.shift());
  }, null, done);
});
