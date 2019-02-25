import { range } from "rxjs";
import { ignoreElements } from "rxjs/operators";

test("ignoreElements", (cb) => {
  range(0, 4)
    .pipe(ignoreElements())
    .subscribe(() => {
      cb.fail();
    }, cb, cb);
});
