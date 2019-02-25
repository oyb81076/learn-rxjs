import { range } from "rxjs";
import { find } from "rxjs/operators";

range(0, 5)
  .pipe(find((x) => x !== 0))
  .subscribe(console.log);
