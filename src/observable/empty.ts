import { empty } from "rxjs/internal/observable/empty";
import { of } from "rxjs/internal/observable/of";
import { mergeMap } from "rxjs/internal/operators/mergeMap";
import { startWith } from "rxjs/internal/operators/startWith";
empty().subscribe(() => {
  console.log("never here");
}, null, () => {
  console.log("complete");
});
empty()
  .pipe(startWith("start with empty"))
  .subscribe(console.log);

of(0, 1, 2, 3)
  .pipe(mergeMap((x) => x % 2 === 0 ? of(1, 2, 3) : empty()))
  .subscribe(console.log)
  ;
