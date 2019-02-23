import { fromPromise } from "rxjs/internal/observable/fromPromise";
import { of } from "rxjs/internal/observable/of";
import { catchError } from "rxjs/internal/operators/catchError";
describe("fromPromise", () => {
  test("resolve", (cb) => {
    fromPromise(Promise.resolve("resolve"))
      .subscribe((v) => {
        expect(v).toBe("resolve");
      }, null, cb);
  });
  test("reject", (cb) => {
    fromPromise(Promise.reject("reject"))
      .pipe(catchError((x) => of(x)))
      .subscribe((v) => expect(v).toBe("reject"), null, cb);
  });
});
