import { of } from "rxjs/internal/observable/of";
import { distinctUntilKeyChanged, toArray } from "rxjs/operators";

test("distinctUntilKeyChanged", (cb) => {
  of({ a: 1, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 1, b: 3 })
    .pipe(distinctUntilKeyChanged("a"))
    .pipe(toArray())
    .subscribe((v) => {
      expect(v).toEqual([
        { a: 1, b: 1 },
        { a: 2, b: 3 },
        { a: 1, b: 3 },
      ]);
    }, null, cb);
});
