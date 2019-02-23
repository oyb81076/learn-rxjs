import { of } from "rxjs/internal/observable/of";
import { catchError } from "rxjs/internal/operators/catchError";
import { map } from "rxjs/internal/operators/map";
test("catchError", (cb) => {
  of(1, 2)
    .pipe(map((_) => { throw new Error("error" + _); }))
    .pipe(catchError((err: Error) => of(err.message)))
    .subscribe((v) => {
      expect(v).toBe("error1");
    }, cb.fail, cb);
});
