// mergeMap + 递归调用
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
import { empty, of } from "rxjs";
import { expand, toArray } from "rxjs/operators";

test("expand", (cb) => {
  of("a", "bb", "ccc", "dddd")
    .pipe(expand((x) => {
      return x.length < 3 ? of(x + x) : empty();
    }))
    .pipe(toArray())
    .subscribe((v) => {
      expect(v).toEqual(["a", "aa", "aaaa", "bb", "bbbb", "ccc", "dddd"]);
    }, null, cb);
});
