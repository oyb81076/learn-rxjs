import { of } from "rxjs";
import { startWith, toArray } from "rxjs/operators";

test("startWith", (cb) => {
  of(1, 2, 3)
  .pipe(startWith(0))
  .pipe(toArray())
  .subscribe((x) => {
    expect(x).toEqual([0, 1, 2, 3]);
  }, cb, cb);
});
