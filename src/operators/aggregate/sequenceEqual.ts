// 比较是否相同
import { isEqual } from "lodash";
import { interval, of, range } from "rxjs";
import { sequenceEqual, take } from "rxjs/operators";

of("a", true, 1)
  .pipe(sequenceEqual(of("a", true, 1)))
  .subscribe(console.log.bind(null, "compare basic: %s"));

of({ a: 1 })
  .pipe(sequenceEqual(of({ a: 1 })))
  .subscribe(console.log.bind(null, "compare object: %s"));

of({ a: 1 })
  .pipe(sequenceEqual(of({ a: 1 }), isEqual))
  .subscribe(console.log.bind(null, "compare object by deepEqual: %s"));

interval(100)
  .pipe(take(4))
  .pipe(sequenceEqual(range(4))).subscribe(console.log.bind(null, "compare interval"));
