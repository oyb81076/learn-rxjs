import { Observable } from "rxjs/internal/Observable";
test("Observable", (done) => {
  const expected = ["hello", "world"];
  const ob = new Observable<string>((subject) => {
    subject.next("hello");
    subject.next("world");
    subject.complete();
  });
  ob.subscribe((value) => {
    expect(value).toBe(expected.shift());
  }, null, done);
});
