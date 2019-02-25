import { range } from "rxjs";
import { filter } from "rxjs/operators";

range(0, 4)
  .pipe(filter((x) => x < 2))
  .subscribe(console.log);
