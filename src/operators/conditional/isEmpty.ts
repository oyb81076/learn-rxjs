import { empty, never, of } from "rxjs";
import { isEmpty } from "rxjs/operators";

of({})
  .pipe(isEmpty())
  .subscribe(console.log);

of()
  .pipe(isEmpty())
  .subscribe(console.log);

empty()
  .pipe(isEmpty())
  .subscribe(console.log);

never()
  .pipe(isEmpty())
  .subscribe(console.log.bind(null, "never")); // never
