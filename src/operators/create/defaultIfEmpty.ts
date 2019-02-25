import { empty, of } from "rxjs";
import { defaultIfEmpty } from "rxjs/operators";

empty()
  .pipe(defaultIfEmpty(3))
  .subscribe(console.log);

of(4)
  .pipe(defaultIfEmpty(3))
  .subscribe(console.log);
