import { EventEmitter } from "events";
import { fromEvent } from "rxjs/internal/observable/fromEvent";
const doc = new EventEmitter();
const ob = fromEvent(doc, "click");
const sub = ob.subscribe(console.log);
doc.emit("click", 1, 2, 3); // [1, 2, 3]
doc.emit("click", "clf"); // crl
console.log("listenCount: %i", doc.listenerCount("click"));
sub.unsubscribe();
console.log("listenCount: %i", doc.listenerCount("click"));
