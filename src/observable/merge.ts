import { merge } from "rxjs/internal/observable/merge";
import { of } from "rxjs/internal/observable/of";
import { delay } from "rxjs/internal/operators/delay";

merge(
  of("World").pipe(delay(0)),
  of("Hello"),
).subscribe(console.log);
