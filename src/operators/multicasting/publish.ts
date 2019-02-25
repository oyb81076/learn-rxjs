import { ConnectableObservable, interval } from "rxjs";
import { publish, refCount, take } from "rxjs/operators";

const code = interval(10);
const hot = interval(10).pipe(publish()) as ConnectableObservable<number>;
const hot$$ = hot.connect();
const refHot = interval(10).pipe(publish(), refCount());

code.pipe(take(3)).subscribe(console.log.bind(null, "code fast: %i"));
setTimeout(() => {
  code.pipe(take(3)).subscribe(console.log.bind(null, "code delay: %i"));
}, 100);
setTimeout(() => {
  hot.pipe(take(3)).subscribe(console.log.bind(null, "hot fast: %i"));
  setTimeout(() => {
    hot.pipe(take(3)).subscribe(console.log.bind(null, "hot slow: %i"), null, () => {
      hot$$.unsubscribe(); // 销毁
    });
  }, 200);
}, 200);

setTimeout(() => {
  refHot.pipe(take(3)).subscribe(console.log.bind(null, "hot fast1: %i"));
  setTimeout(() => {
    refHot.pipe(take(3)).subscribe(console.log.bind(null, "hot fast2: %i"));
  }, 20);
  setTimeout(() => {
    refHot.pipe(take(3)).subscribe(console.log.bind(null, "hot slow: %i"));
  }, 200);
}, 600);
