import { of } from "rxjs/internal/observable/of";
import { distinct, toArray } from "rxjs/operators";
describe("distinct", () => {
  it("distinct(fn)", (cb) => {
    of(1, 2, 3, 4, 5, 6)
      .pipe(distinct((v) => v % 3))
      .pipe(toArray())
      .subscribe((v) => {
        expect(v).toEqual([1, 2, 3]);
      }, null, cb);
  });
  it("distinct()", (cb) => {
    of(1, 2, 1, 2, 1, 2)
      .pipe(distinct())
      .pipe(toArray())
      .subscribe((v) => {
        expect(v).toEqual([1, 2]);
      }, null, cb);
  });
});
