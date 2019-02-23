import { empty } from "rxjs/internal/observable/empty";
import { of } from "rxjs/internal/observable/of";
import { mergeMap } from "rxjs/internal/operators/mergeMap";
import { startWith } from "rxjs/internal/operators/startWith";

describe("empty", () => {
  test("should not subscribe", (done) => {
    empty().subscribe(() => {
      done.fail("should never run here");
    }, null, done);
  });
  test("startWith", (cb) => {
    empty()
      .pipe(startWith(1))
      .subscribe((v) => expect(v).toBe(1), null, cb);
  });
  // 通常和mergeMap混用
  test("mergeMap", (cb) => {
    const expected = ["hello", "world"];
    of(1, 2, 3)
      .pipe(mergeMap((v) => {
        switch (v) {
          case 1: return of("hello");
          case 3: return of("world");
          default: return empty();
        }
      }))
      .subscribe((v) => {
        expect(v).toBe(expected.shift());
      }, null, cb);
  });
});
