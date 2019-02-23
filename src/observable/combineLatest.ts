import { combineLatest } from "rxjs/internal/observable/combineLatest";
import { timer } from "rxjs/internal/observable/timer";
import { map } from "rxjs/internal/operators/map";
import { take } from "rxjs/internal/operators/take";

const count0 = timer(1000, 200).pipe(take(5));
const count1 = timer(1000, 300).pipe(take(5));
const count2 = timer(100, 400).pipe(take(5));

const source = combineLatest(count0, count1, count2);
source.subscribe((arr) => {
  console.log("current count: %s", arr.join(","));
});
source
  .pipe(map((arr) => arr.reduce((x, y) => x + y, 0)))
  .subscribe((count) => {
    console.log(`total count ${count}`);
  });
