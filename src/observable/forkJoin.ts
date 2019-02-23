import { forkJoin } from "rxjs/internal/observable/forkJoin";
import { interval } from "rxjs/internal/observable/interval";
import { take } from "rxjs/internal/operators/take";
forkJoin(
  interval(100).pipe(take(3)),
  interval(40).pipe(take(5)),
).subscribe(console.log);
