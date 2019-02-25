import { interval } from "rxjs";
import { of } from "rxjs/internal/observable/of";
import { zip } from "rxjs/internal/observable/zip";
import { map, pluck } from "rxjs/operators";

zip(
  of(1, 2, 3, 4),
  of("a", "b"),
).subscribe(console.log);

zip(
  of("a", "b", "c"),
  interval(1000),
).pipe(pluck(0))
  .subscribe(console.log);
