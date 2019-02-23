import { ConnectableObservable } from "rxjs/internal/observable/ConnectableObservable";
import { interval } from "rxjs/internal/observable/interval";
import { multicast } from "rxjs/internal/operators/multicast";
import { take } from "rxjs/internal/operators/take";
import { Subject } from "rxjs/internal/Subject";
const muti = interval(100)
  .pipe(take(3))
  .pipe(multicast(new Subject())) as ConnectableObservable<number>;
muti.subscribe(console.log);
muti.subscribe(console.log);
setTimeout(() => {
  muti.connect();
}, 1000);
