import { Subject } from "rxjs/internal/Subject";
test("Subject", (cb) => {
  const subject = new Subject<string>();
  const expected0 = ["a", "b", "c"];
  subject.subscribe((v) => {
    expect(v).toBe(expected0.shift());
  });
  subject.next("a");

  const expected1 = ["b", "c"];
  subject.subscribe((v) => {
    expect(v).toBe(expected1.shift());
  });
  subject.next("b");
  subject.next("c");
  subject.complete();
  subject.next("d");
  subject.subscribe(cb.fail);
  expect(expected0.length).toBe(0);
  expect(expected1.length).toBe(0);
  cb();
});
