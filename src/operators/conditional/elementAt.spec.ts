import { empty } from "rxjs/internal/observable/empty";
import { of } from "rxjs/internal/observable/of";
import { elementAt } from "rxjs/operators";

test("should be ok", (cb) => {
  of(1, 2, 3, 4)
    .pipe(elementAt(2))
    .subscribe((v) => {
      expect(v).toBe(3);
    }, cb.fail, cb);
});

test("out of range", (cb) => {
  of(1, 2, 3, 4)
    .pipe(elementAt(100))
    .subscribe(null, () => cb());
});

test("default value", (cb) => {
  const defaultValue = 20;
  of(1, 2, 3, 4)
    .pipe(elementAt(100, defaultValue))
    .subscribe((v) => {
      expect(v).toBe(defaultValue);
    }, null, cb);
});

test("empty", (cb) => {
  const defaultValue = 20;
  empty()
    .pipe(elementAt(0, defaultValue))
    .subscribe((v) => {
      expect(v).toBe(defaultValue);
      cb();
    });
});
