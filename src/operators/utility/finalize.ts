import { never, range } from "rxjs";
import { finalize } from "rxjs/operators";

range(0, 4)
  .pipe(finalize(() => {
    console.log("final");
  }))
  .subscribe(console.log, null, console.log.bind(null, "complete"));

never()
  .pipe(finalize(console.log.bind(null, "never")))
  .subscribe(null, null, console.log.bind(null, "never"));
