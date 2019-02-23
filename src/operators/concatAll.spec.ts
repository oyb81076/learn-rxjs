import { from } from "rxjs/internal/observable/from";
import { of } from "rxjs/internal/observable/of";
import { concatAll } from "rxjs/internal/operators/concatAll";
import { map } from "rxjs/internal/operators/map";
test("concatAll", (cb) => {
  const expected = ["v0", "v1", "v2"];
  from([0, 1, 2])
    .pipe(map((v) => of("v" + v)))
    .pipe(concatAll())
    .subscribe((v) => {
      expect(v).toEqual(expected.shift());
    }, cb.fail, cb);
});
