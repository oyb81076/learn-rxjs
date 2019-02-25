import { of, range } from "rxjs";
import { map, zipAll } from "rxjs/operators";

of("a", "b")
  .pipe(map((x) => range(4).pipe(map((b) => x + b))))
  .pipe(zipAll())
  .subscribe(console.log);
