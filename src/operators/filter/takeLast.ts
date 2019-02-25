import { range } from "rxjs";
import { takeLast } from "rxjs/operators";

range(1, 10)
  .pipe(takeLast(2))
  .subscribe(console.log);
