import { of } from "rxjs/internal/observable/of";
import { elementAt } from "rxjs/operators";

of(1, 2, 3, 4)
  .pipe(elementAt(2))
  .subscribe(console.log);

of(1, 2, 3, 4)
  .pipe(elementAt(100))
  .subscribe(null, console.error);

of(1, 2, 3, 4)
  .pipe(elementAt(100, 20))
  .subscribe(console.log);
