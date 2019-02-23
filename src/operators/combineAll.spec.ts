// 收集所有结果到一个集合
import { from } from "rxjs/internal/observable/from";
import { of } from "rxjs/internal/observable/of";
import { combineAll } from "rxjs/internal/operators/combineAll";
import { map } from "rxjs/internal/operators/map";
test("combineAll", (cb) => {
  from([0, 1, 2])
    .pipe(map((v) => of("v" + v)))
    .pipe(combineAll())
    .subscribe((v) => {
      expect(v).toEqual(["v0", "v1", "v2"]);
    }, cb.fail, cb);
});
