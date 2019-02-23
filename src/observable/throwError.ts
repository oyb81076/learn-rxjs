import { of } from "rxjs/internal/observable/of";
import { throwError } from "rxjs/internal/observable/throwError";
import { catchError } from "rxjs/internal/operators/catchError";
import { map } from "rxjs/internal/operators/map";
import { mergeMap } from "rxjs/internal/operators/mergeMap";
throwError("catch error on pipe").pipe(catchError((x) => of(x))).subscribe(console.log);
throwError("catch error on subscribe").subscribe(console.log, console.log);

of(1, 2, 3)
  .pipe(mergeMap((x) => x === 2 ? throwError("throw error on mergeMap") : of(x)))
  .subscribe(console.log, console.error);
of(1, 2, 3)
  .pipe(map((x) => {
    if (x === 2) { throw new Error("throw new Error in map"); }
    return `of: ${x}`;
  }))
  .subscribe(console.log, (x: Error) => console.error(x.message), () => console.log("never run here"));
