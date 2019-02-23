import { fromArray } from "rxjs/internal/observable/fromArray";
test("fromArray", (cb) => {
  const expected = [1, 2, 3, 4];
  fromArray([...expected])
    .subscribe((v) => {
      expect(v).toBe(expected.shift());
    }, null, cb);
});
