// 收集所有结果到一个集合
import { from } from "rxjs/internal/observable/from";
import { interval } from "rxjs/internal/observable/interval";
import { of } from "rxjs/internal/observable/of";
import { combineAll } from "rxjs/internal/operators/combineAll";
import { map } from "rxjs/internal/operators/map";
import { take } from "rxjs/internal/operators/take";
from([0, 1, 2])
  .pipe(map((v) => of("v" + v)))
  .pipe(combineAll())
  .subscribe(console.log);

from([0, 1, 2])
  .pipe(map((v) => interval(100).pipe(take(3))))
  .pipe(combineAll())
  .subscribe(console.log);
