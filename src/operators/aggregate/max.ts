import { of } from "rxjs";
import { max } from "rxjs/operators";

of(1, 3, 2)
  .pipe(max())
  .subscribe(console.log);
