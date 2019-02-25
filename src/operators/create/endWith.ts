import { of } from "rxjs/internal/observable/of";
import { endWith, startWith } from "rxjs/operators";

of(2)
  .pipe(startWith(1))
  .pipe(startWith(0))
  .pipe(endWith(3))
  .pipe(endWith(4))
  .subscribe(console.log);
