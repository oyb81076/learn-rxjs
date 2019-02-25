import { of, range } from "rxjs";
import { mergeMapTo } from "rxjs/operators";

range(0, 5)
  .pipe(mergeMapTo(of(0)))
  .subscribe(console.log);
