import { ConnectableObservable } from "rxjs/internal/observable/ConnectableObservable";
import { interval } from "rxjs/internal/observable/interval";
import { publish } from "rxjs/internal/operators/publish";
import { take } from "rxjs/internal/operators/take";
const muti = interval(100)
  .pipe(take(3))
  .pipe(publish()) as ConnectableObservable<number>;
muti.subscribe(console.log);
muti.subscribe(console.log);
setTimeout(() => {
  muti.connect();
}, 1000);
