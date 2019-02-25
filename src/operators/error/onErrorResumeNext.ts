import { of } from "rxjs";
import { map, onErrorResumeNext } from "rxjs/operators";

of("a", "b", "c").pipe(
  map((x) => {
    if (x === "b") { throw Error(); }
    return x;
  }),
  onErrorResumeNext(of(1, "b", 3)),
)
  .subscribe(
    console.log,
    console.error,
    () => console.log("that's it!"),
  );
