import { BehaviorSubject, Subject } from "rxjs";
import { toArray } from "rxjs/operators";
test("subject", (cb) => {
  const source$ = new Subject();
  source$.next(1);
  source$.pipe(toArray()).subscribe((v) => expect(v).toEqual([2]), null, cb);
  source$.next(2);
  source$.complete();
});

test("behavior subject", (cb) => {
  const source$ = new BehaviorSubject(0);
  source$.next(1);
  source$.pipe(toArray()).subscribe((v) => expect(v).toEqual([1, 2]), null, cb);
  source$.next(2);
  source$.complete();
});
