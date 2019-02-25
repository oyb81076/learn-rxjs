import { range } from "rxjs";
import { materialize } from "rxjs/operators";

range(0, 4)
  .pipe(materialize())
  .subscribe(console.log);
