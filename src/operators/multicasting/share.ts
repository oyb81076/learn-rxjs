import { interval } from "rxjs";
import { share, take, toArray } from "rxjs/operators";
// pipe(share()) 等价于 pipe(publish(), refCount())
const source$ = interval(30).pipe(share());
source$.pipe(take(5)).pipe(toArray()).subscribe(console.log.bind(null, "fast: %s"));
setTimeout(() => {
  source$.pipe(take(5)).pipe(toArray()).subscribe(console.log.bind(null, "delay: %s"));
}, 100);

setTimeout(() => {
  source$.pipe(take(5)).pipe(toArray()).subscribe(console.log.bind(null, "slow: %s"));
}, 400);
