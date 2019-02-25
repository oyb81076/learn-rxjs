import { of } from "rxjs/internal/observable/of";
import { endWith, startWith, toArray } from "rxjs/operators";

test("endWith just like startWith", (cb) => {
  of(2)
    .pipe(startWith(1))
    .pipe(startWith(0))
    .pipe(endWith(3))
    .pipe(endWith(4))
    .pipe(toArray())
    .subscribe((v) => {
      expect(v).toEqual([0, 1, 2, 3, 4]);
    }, cb, cb);
});
