import { Observable } from "rxjs/internal/Observable";
const hello = new Observable<string>((subject) => {
    subject.next("hello");
    subject.next("world");
    subject.next("!");
    subject.complete();
});
hello.subscribe(console.log);
