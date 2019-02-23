import { interval } from "rxjs/internal/observable/interval";
import { take } from "rxjs/internal/operators/take";
interval(200)
  .pipe(take(3))
  .subscribe(console.log);
