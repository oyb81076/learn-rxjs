import { BehaviorSubject } from "rxjs";
const click$ = new BehaviorSubject(0);
click$.subscribe(console.log.bind(null, "a:%i"));
click$.next(1);
click$.subscribe(console.log.bind(null, "b:%i"));
click$.next(2);
click$.complete();
