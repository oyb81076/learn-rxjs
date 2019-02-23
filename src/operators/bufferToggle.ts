// 搞不懂
import { interval } from "rxjs/internal/observable/interval";
import { timer } from "rxjs/internal/observable/timer";
import { bufferToggle } from "rxjs/internal/operators/bufferToggle";
import { take } from "rxjs/internal/operators/take";
interval(40)
  .pipe(
    bufferToggle(
      interval(200), // 开启buffer
      (v) => { // 关闭buffer
        console.log(`Value ${v} emitted, starting buffer! Closing in 100ms!`);
        return timer(100);
      },
    ),
  )
  .pipe(take(3))
  .subscribe(console.log);
