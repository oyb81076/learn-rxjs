import { ConnectableObservable, interval, Subject } from "rxjs";
import { multicast, take } from "rxjs/operators";
const muti = interval(100)
  .pipe(multicast(new Subject())) as ConnectableObservable<number>;
const muti$$ = muti.connect();
muti.pipe(take(3)).subscribe(console.log);
setTimeout(() => {
  muti.pipe(take(3)).subscribe(console.log, null, () => {
    muti$$.unsubscribe();
  });
}, 1000);
