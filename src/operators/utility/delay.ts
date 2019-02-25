import { empty } from "rxjs/internal/observable/empty";
import { of } from "rxjs/internal/observable/of";
import { delay } from "rxjs/internal/operators/delay";
import { startWith } from "rxjs/internal/operators/startWith";

of(1, 2, 3).pipe(delay(500)).subscribe(console.log);

empty().pipe(delay(1000)).pipe(startWith("start")).subscribe(console.log);
