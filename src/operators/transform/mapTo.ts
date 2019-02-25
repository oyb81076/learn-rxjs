import { range } from "rxjs";
import { mapTo } from "rxjs/operators";

range(0, 3)
  .pipe(mapTo("a"))
  .subscribe(console.log);
