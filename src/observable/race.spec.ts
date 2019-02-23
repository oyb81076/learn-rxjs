import { of } from "rxjs/internal/observable/of";
import { race } from "rxjs/internal/observable/race";
import { throwError } from "rxjs/internal/observable/throwError";
import { delay } from "rxjs/internal/operators/delay";
import { mergeMap } from "rxjs/internal/operators/mergeMap";
describe("race", () => {
  it("race fast", (cb) => {
    race(
      of("slow").pipe(delay(20)),
      of("fast").pipe(delay(10)),
    ).subscribe((v) => {
      expect(v).toBe("fast");
    }, null, cb);
  });
  it("race ignore Err", (cb) => {
    race(
      of().pipe(delay(200)).pipe(mergeMap((_) => throwError("race Err"))),
      of("ok").pipe(delay(100)),
    ).subscribe((v) => {
      expect(v).toBe("ok");
    }, null, cb);
  });
  it("race error", (cb) => {
    race(
      of(0).pipe(delay(40)).pipe(mergeMap((_) => throwError("caught error"))).pipe(delay(1000)),
      of("never run here").pipe(delay(100)),
    ).subscribe(cb.fail, (v) => {
      expect(v).toBe("caught error");
      cb();
    });
  });
});
