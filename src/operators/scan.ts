import { range } from "rxjs/internal/observable/range";
import {scan} from "rxjs/internal/operators/scan";
range(0, 10)
  .pipe(scan((acc, value) => acc + value, 0))
   .subscribe(console.log);
