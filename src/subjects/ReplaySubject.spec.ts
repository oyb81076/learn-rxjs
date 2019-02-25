import { ReplaySubject, Subject } from "rxjs";
import { toArray } from "rxjs/operators";

test("subject will ignore item before subscribe", (cb) => {
  const subject$ = new Subject();
  subject$.next(1);
  subject$.pipe(toArray()).subscribe((x) => expect(x).toEqual([2]), cb, cb);
  subject$.next(2);
  subject$.complete();
});

test("replay will get all items", (cb) => {
  const replay$ = new ReplaySubject();
  replay$.next(1);
  replay$.pipe(toArray()).subscribe((x) => expect(x).toEqual([1, 2]), cb, cb);
  replay$.next(2);
  replay$.complete();
});
