import { range } from "rxjs/internal/observable/range";
import { every } from "rxjs/operators";

test("should be true", (cb) => {
  range(0, 4)
    .pipe(every((x) => x < 5))
    .subscribe((v) => {
      expect(v).toBe(true);
    }, cb.fail, cb);
});

test("should be true", (cb) => {
  range(0, 4)
    .pipe(every((x) => x < 1))
    .subscribe((v) => {
      expect(v).toBe(false);
    }, cb.fail, cb);
});
