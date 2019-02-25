import { interval, timer } from "rxjs";
import { debounce, filter } from "rxjs/operators";

interval(10)
  .pipe(filter((x) => x % 10 < 5))
  .pipe(debounce(() => timer(30)))
  .subscribe(console.log);
