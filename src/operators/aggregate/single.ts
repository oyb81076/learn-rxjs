import { empty, of } from "rxjs";
import { single } from "rxjs/operators";
// 如果队列个数不是1就出错

empty()
  .pipe(single())
  .subscribe(console.log.bind(null, "never"), console.error);
of(1, 2, 1, 3)
  .pipe(single())
  .subscribe(console.log.bind(null, "never"), console.error);
of(1)
  .pipe(single())
  .subscribe(console.log);
