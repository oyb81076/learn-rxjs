import { range } from "rxjs";
import { take } from "rxjs/operators";

range(10)
  .pipe(take(3))
  .subscribe(console.log);
