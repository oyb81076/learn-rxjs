import { range } from "rxjs";
import { filter, toArray } from "rxjs/operators";

test("filter", (cb) => {
  range(0, 4)
    .pipe(filter((x) => x < 2))
    .pipe(toArray())
    .subscribe((v) => {
      expect(v).toEqual([0, 1]);
    }, null, cb);
});
