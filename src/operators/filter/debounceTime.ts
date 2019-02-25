import { interval } from "rxjs";
import { debounceTime, filter } from "rxjs/operators";

interval(10)
  .pipe(filter((x) => x % 10 < 5))
  .pipe(debounceTime(30))
  .subscribe(console.log);
