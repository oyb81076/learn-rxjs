import { interval } from "rxjs/internal/observable/interval";
import { using } from "rxjs/internal/observable/using";
import { take } from "rxjs/internal/operators/take";
const ob = using(() => {
  return {
    unsubscribe() {
      console.log("unsubscribe");
    },
  };
}, () => {
  return interval(3).pipe(take(3));
});
ob.subscribe(console.log);
ob.subscribe(console.log);
