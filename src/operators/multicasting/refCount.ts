import { interval, Subject } from "rxjs";
import { multicast, refCount } from "rxjs/operators";
// refCount 配合 multicast 之后不需要再显示调用 connect();
const muti = interval(100)
  .pipe(multicast(new Subject()), refCount());
setTimeout(() => {
  const ob$$ = muti.subscribe((x) => {
    console.log("a:%i", x);
  });
  setTimeout(() => {
    ob$$.unsubscribe();
  }, 2000);
}, 200);
setTimeout(() => {
  const ob$$ = muti.subscribe((x) => {
    console.log("b:%i", x);
    setTimeout(() => {
      ob$$.unsubscribe();
    }, 2000);
  });
}, 1000);
