import { NEVER, never } from "rxjs/internal/observable/never";
import { range } from "rxjs/internal/observable/range";
import { timer } from "rxjs/internal/observable/timer";
import { mergeMap } from "rxjs/internal/operators/mergeMap";
import { startWith } from "rxjs/internal/operators/startWith";

describe("never", () => {
  test("endless", (cb) => {
    never().pipe(startWith("ok"))
      .subscribe((v) => {
        expect(v).toBe("ok");
        cb();
      }, null, cb.fail);
  });
  test("mergeMap => Never", (cb) => {
    range(1, 3).pipe(mergeMap(() => NEVER))
      .subscribe(cb.fail, null, cb.fail);
    timer(100).subscribe(cb);
  });
});
