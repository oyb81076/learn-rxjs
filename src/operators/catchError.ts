import { of } from "rxjs/internal/observable/of";
import { catchError } from "rxjs/internal/operators/catchError";
import { map } from "rxjs/internal/operators/map";

of(1, 2)
  .pipe(map((_) => { throw new Error("error"); }))
  .pipe(catchError((err: Error) => of(err.message)))
  .subscribe(console.log);
