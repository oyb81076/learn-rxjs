import { EventEmitter } from "events";
import { fromEvent } from "rxjs/internal/observable/fromEvent";
test("fromEvent", () => {
  const doc = new EventEmitter();
  const ob = fromEvent(doc, "click");
  const sub = ob.subscribe((v) => {
    expect(v).toEqual("data");
  });
  doc.emit("click", "data");
  expect(doc.listenerCount("click")).toBe(1);
  sub.unsubscribe();
  expect(doc.listenerCount("click")).toBe(0);
});
