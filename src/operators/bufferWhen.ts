import { interval } from "rxjs/internal/observable/interval";
import { bufferWhen } from "rxjs/internal/operators/bufferWhen";
interval(40)
  .pipe(bufferWhen(() => { // like bufferTime
    return interval(100);
  }))
  .subscribe(console.log);
