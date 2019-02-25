import { interval } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";

// source0.pipe(withLatestFrom(source1))
// is equal to
/// combineLatest(source0, source1)

interval(200)
  .pipe(map((x) => "a" + x))
  .pipe(withLatestFrom(interval(50).pipe(map((x) => "b" + x))))
  .subscribe(console.log);
