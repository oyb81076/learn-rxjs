import { fromPromise } from "rxjs/internal/observable/fromPromise";
import { of } from "rxjs/internal/observable/of";
import { catchError } from "rxjs/internal/operators/catchError";
fromPromise(Promise.resolve("resolve")).subscribe(console.log);
fromPromise(Promise.reject("reject"))
  .pipe(catchError((x) => of(x))).subscribe(console.log);
