import { range } from "rxjs";
import { first } from "rxjs/operators";

range(0, 4)
  .pipe(first())
  .subscribe(console.log);
