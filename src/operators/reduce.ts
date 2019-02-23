import { range } from "rxjs/internal/observable/range";
import { reduce } from "rxjs/internal/operators/reduce";
const ob = range(0, 10)
  .pipe(reduce<number, number[]>((acc, v) => {
    return acc.concat(v);
  }, []));
ob.subscribe(console.log);
ob.subscribe(console.log);
