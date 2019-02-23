import { empty } from "rxjs/internal/observable/empty";
import { NEVER, never } from "rxjs/internal/observable/never";
import { range } from "rxjs/internal/observable/range";
import { mergeMap } from "rxjs/internal/operators/mergeMap";
import { startWith } from "rxjs/internal/operators/startWith";
const neverRun = () => console.log("never");
never().pipe(startWith("startWith never")).subscribe(console.log, null, neverRun);
empty().pipe(startWith("startWith empty")).subscribe(
  console.log, null, () => {
    console.log("complete by empty in empty()");
  });

range(1, 3).pipe(mergeMap(() => NEVER))
  .subscribe(neverRun, null, neverRun);

range(1, 3).pipe(mergeMap(() => empty()))
  .subscribe(neverRun, null, () => {
    console.log("complete by empty");
  });
