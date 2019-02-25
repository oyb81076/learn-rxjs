// 超时错误
import { interval } from "rxjs/internal/observable/interval";
import { timeout } from "rxjs/internal/operators/timeout";

// 100ms之后如果还没结束就报错
interval(10)
  .pipe(timeout(new Date(Date.now() + 100)))
  .subscribe(console.log, console.error);

// 100ms之内没有emit就报错
interval(200)
  .pipe(timeout(100))
  .subscribe(console.log, console.error);
