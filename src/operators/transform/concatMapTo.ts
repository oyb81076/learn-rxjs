import { of } from "rxjs/internal/observable/of";
import { range } from "rxjs/internal/observable/range";
import { concatMapTo } from "rxjs/internal/operators/concatMapTo";
range(0, 3).pipe(concatMapTo(of(0))).subscribe(console.log);
