import { of, range } from "rxjs";
import { map, toArray, zipAll } from "rxjs/operators";

test("zipAll", (cb) => {
  of("a", "b")
    .pipe(map((x) => range(4).pipe(map((b) => x + b))))
    .pipe(zipAll())
    .pipe(toArray())
    .subscribe((v) => {
      expect(v).toEqual([
        ["a0", "b0"],
        ["a1", "b1"],
        ["a2", "b2"],
        ["a3", "b3"],
      ]);
    }, cb, cb);
});
