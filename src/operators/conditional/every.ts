import { range } from "rxjs/internal/observable/range";
import { every } from "rxjs/operators";

range(0, 4)
  .pipe(every((x) => x < 5))
  .subscribe(console.log);

range(0, 4)
  .pipe(every((x) => x < 1))
  .subscribe(console.log);
