import { AsyncSubject } from "rxjs";
// jest like pipe(last());

const subject$ = new AsyncSubject();
subject$.next(1);
subject$.subscribe(console.log);
subject$.next(2);
setTimeout(() => {
  subject$.next(3);
  subject$.next(4);
  subject$.complete();
}, 0);
