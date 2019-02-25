import { of, onErrorResumeNext, throwError } from "rxjs";
import { mergeMap } from "rxjs/operators";

onErrorResumeNext(
  of(1, 2, 3, 4).pipe(mergeMap((x) => x === 3 ? throwError("err") : of(x))),
  of(0, 0, 0),
).subscribe(console.log, console.error)
;
