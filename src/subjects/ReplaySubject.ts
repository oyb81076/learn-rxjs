import { ReplaySubject, Subject } from "rxjs";
const subject$ = new Subject();
subject$.next(1);
subject$.subscribe(console.log.bind(null, "subject:%i"));
subject$.next(2);
subject$.complete();

const replay$ = new ReplaySubject();
replay$.next(1);
replay$.subscribe(console.log.bind(null, "replay:%i"));
replay$.next(2);
replay$.complete();
