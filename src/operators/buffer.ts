import { interval } from "rxjs/internal/observable/interval";
import { buffer } from "rxjs/internal/operators/buffer";
import { take } from "rxjs/internal/operators/take";
interval(2)
  .pipe(buffer(interval(10).pipe(take(2))))
  .subscribe(console.log);
