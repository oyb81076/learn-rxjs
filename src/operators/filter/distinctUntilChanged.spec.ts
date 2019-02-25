import { of } from "rxjs/internal/observable/of";
import { distinctUntilChanged, toArray } from "rxjs/operators";

test("distinctUntilChanged", (cb) => {
  of(1, 1, 2, 1)
    .pipe(distinctUntilChanged())
    .pipe(toArray())
    .subscribe((v) => {
      expect(v).toEqual([1, 2, 1]);
    }, null, cb);
});
