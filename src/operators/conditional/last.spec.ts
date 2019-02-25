import { interval, range } from "rxjs";
import { last, timeout } from "rxjs/operators";

test("last", (cb) => {
  range(0, 3)
    .pipe(last())
    .subscribe((x) => {
      expect(x).toBe(2);
    }, null, cb);
});

test("last", (cb) => {
  interval(10)
    .pipe(last())
    .pipe(timeout(200))
    .subscribe(() => {
      cb.fail();
    }, () => {
      cb();
    });
});
