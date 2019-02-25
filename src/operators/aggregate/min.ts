import { from } from "rxjs";
import { min } from "rxjs/operators";

from([1, 3, 9, 0])
  .pipe(min())
  .subscribe(console.log);
