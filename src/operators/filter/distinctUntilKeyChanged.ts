import { of } from "rxjs/internal/observable/of";
import { distinctUntilKeyChanged } from "rxjs/operators";
of({ a: 1, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 1, b: 3 })
  .pipe(distinctUntilKeyChanged("a"))
  .subscribe(console.log);
