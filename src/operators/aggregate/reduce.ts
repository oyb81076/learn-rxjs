import { range } from "rxjs/internal/observable/range";
import { reduce } from "rxjs/internal/operators/reduce";
const ob = range(0, 10)
  .pipe(reduce((x, y) => x + y, 0));
ob.subscribe(console.log);
