import { interval } from "rxjs/internal/observable/interval";
import { bufferTime } from "rxjs/internal/operators/bufferTime";
import { take } from "rxjs/internal/operators/take";
interval(40)
  .pipe(bufferTime(400))
  .pipe(take(3))
  .subscribe(console.log);
