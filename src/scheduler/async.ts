import { of } from "rxjs/internal/observable/of";
import { asap } from "rxjs/internal/scheduler/asap";
import { async } from "rxjs/internal/scheduler/async";
async.schedule(function func(state) {
  console.log(`task run ${state}`);
  if (state === 3) { return; }
  this.schedule((state || 0) + 1, 300);
}, 100, 0);
of("async", async).subscribe({ next: console.log });
of("asap", asap).subscribe({ next: console.log });
