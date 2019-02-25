import { of, range } from "rxjs";
import { mergeScan } from "rxjs/operators";

range(0, 5)
  .pipe(mergeScan((x, y) => of(x + y) , 0))
  .subscribe(console.log);
