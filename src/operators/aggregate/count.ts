import { range } from "rxjs/internal/observable/range";
import { count } from "rxjs/internal/operators/count";
range(0, 10)
  .pipe(count((i) => i === 1 || i === 2))
  .subscribe(console.log);
