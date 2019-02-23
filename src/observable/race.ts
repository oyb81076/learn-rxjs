import { of } from "rxjs/internal/observable/of";
import { race } from "rxjs/internal/observable/race";
import { throwError } from "rxjs/internal/observable/throwError";
import { delay } from "rxjs/internal/operators/delay";
import { mergeMap } from "rxjs/internal/operators/mergeMap";
race(
  of("race a").pipe(delay(200)),
  of("race b").pipe(delay(100)),
).subscribe(console.log);

race(
  of(0).pipe(delay(200)).pipe(mergeMap((_) => throwError("never be caught"))),
  of("ok before error").pipe(delay(100)),
).subscribe(console.log);

race(
  of(0).pipe(delay(40)).pipe(mergeMap((_) => throwError("caught error"))).pipe(delay(1000)),
  of("never run here").pipe(delay(100)),
).subscribe(console.log, console.error);
