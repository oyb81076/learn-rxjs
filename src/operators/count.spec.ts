import { range } from "rxjs/internal/observable/range";
import { count } from "rxjs/internal/operators/count";
test("count", (cb) => {
  range(0, 10)
    .pipe(count((i) => i === 1 || i === 2))
    .subscribe((v) => {
      expect(v).toBe(2);
    }, cb.fail, cb);
});
