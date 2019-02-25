// 详细解释看 exhaust
// exhaust + map = exhaustMap
import { interval } from "rxjs/internal/observable/interval";
import { exhaust, map, take } from "rxjs/operators";

interval(30)
  .pipe(take(3))
  .pipe(map((x) => interval(10).pipe(take(5)).pipe(map((v) => `${x}:${v}`)) ))
  .pipe(exhaust())
  .subscribe(console.log);
