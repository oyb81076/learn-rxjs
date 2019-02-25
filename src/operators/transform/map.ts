import { range } from "rxjs";
import { map } from "rxjs/operators";

range(0, 4)
  .pipe(map((x) => "0x" + x))
  .subscribe(console.log);
