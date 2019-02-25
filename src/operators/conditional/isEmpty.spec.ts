import { empty, never, of } from "rxjs";
import { isEmpty } from "rxjs/operators";

test("not empty", (cb) => {
  of({})
    .pipe(isEmpty())
    .subscribe((v) => expect(v).toBe(false), cb, cb);
});

test("empty", (cb) => {
  empty()
    .pipe(isEmpty())
    .subscribe((x) => expect(x).toBe(true), cb, cb);
});
