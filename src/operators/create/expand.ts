import { empty, of } from "rxjs";
import { expand } from "rxjs/operators";

of("a", "bb", "ccc", "dddd")
  .pipe(expand((x) => {
    return x.length < 3 ? of(x + x) : empty();
  }))
  .subscribe(console.log);
