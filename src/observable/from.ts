import { from } from "rxjs/internal/observable/from";
import { map } from "rxjs/internal/operators/map";
from([1, 2, 3, 4].map((x) => `fromArray: ${x}`))
  .subscribe(console.log);
function* iterator() {
  yield 1;
  yield 2;
  yield 3;
}
from(iterator())
  .pipe(map((x) => `iterator: ${x}`))
  .subscribe(console.log);
// from promise
from(Promise.resolve("promise")).subscribe(console.log);

const objMap = new Map<string, string>();
objMap.set("key", "value");
from(objMap).subscribe(console.log);

from("hello world").subscribe(console.log);
