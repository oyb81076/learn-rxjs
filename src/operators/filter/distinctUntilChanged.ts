import { of } from "rxjs/internal/observable/of";
import { distinctUntilChanged } from "rxjs/operators";
of(1, 1, 2, 1)
  .pipe(distinctUntilChanged())
  .subscribe(console.log);
