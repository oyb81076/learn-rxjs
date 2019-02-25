import { mergeMapTo } from "rxjs/operators";
import { TestScheduler } from "rxjs/testing";

const scheduler = new TestScheduler((a, b) => {
  expect(a).toEqual(b);
});

test("test one", () => {
  scheduler.run(({ cold, expectObservable }) => {
    const src = cold("-a--b---c--|");
    const expected = "-a--a---a--|";
    const source = src.pipe(mergeMapTo("a"));
    expectObservable(source).toBe(expected);
  });
});
