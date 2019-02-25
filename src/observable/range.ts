import { range } from "rxjs/internal/observable/range";
import { isEmpty } from "rxjs/operators";
range(1, 4).subscribe(console.log);
range(2).subscribe(console.log);
range()
  .pipe(isEmpty())
  .subscribe(console.log);
