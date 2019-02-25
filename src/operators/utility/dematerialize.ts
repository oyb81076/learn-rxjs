import { of } from "rxjs";
import { dematerialize, materialize } from "rxjs/operators";

of(1, 2, 3)
  .pipe(materialize())
  .pipe(dematerialize())
  .subscribe(console.log);
