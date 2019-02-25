import { range } from "rxjs";
import { pairwise } from "rxjs/operators";

range(0, 5)
  .pipe(pairwise())
  .subscribe(console.log);
