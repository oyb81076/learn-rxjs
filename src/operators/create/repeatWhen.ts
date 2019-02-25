import { interval } from "rxjs";
import { delay, repeatWhen, take, timestamp } from "rxjs/operators";

interval(100)
  .pipe(take(2))
  .pipe(timestamp())
  .pipe(repeatWhen((source$) => {
    // 延迟1s后执行 重复两次
    return source$.pipe(take(2)).pipe(delay(1000));
  }))
  .subscribe(console.log);
