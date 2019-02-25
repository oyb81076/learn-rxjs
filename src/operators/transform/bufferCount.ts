import { range } from "rxjs/internal/observable/range";
import { bufferCount } from "rxjs/internal/operators/bufferCount";
range(0, 10).pipe(bufferCount(4)).subscribe(console.log);
