import { of } from "rxjs/internal/observable/of";
import { throwError } from "rxjs/internal/observable/throwError";
import { mergeMap } from "rxjs/internal/operators/mergeMap";
describe("throwError", () => {
  test("as a source", (cb) => {
    throwError("error")
      .subscribe(
        () => cb.fail("never run here"),
        (err) => {
          expect(err).toBe("error");
          cb();
        },
        () => cb.fail("never run here"),
      );
  });
  test("mergeMap", (cb) => {
    of(1, 2, 3)
      .pipe(mergeMap((x) => x === 2 ? throwError("throw Error") : of(x)))
      .subscribe(
        (v) => expect(v).toBe(1),
        (err) => {
          expect(err).toBe("throw Error");
          cb();
        },
        () => {
          cb.fail("never run here");
        },
      );
  });
});
