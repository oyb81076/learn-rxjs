import { range } from "rxjs";
import { partition, toArray } from "rxjs/operators";

test("partition", () => {
  const source = range(0, 5);
  const part = partition((x: number) => x % 2 === 0);
  const [ob0$, ob1$] = part(source);
  ob0$.pipe(toArray()).subscribe((v) => expect(v).toEqual([0, 2, 4]));
  ob1$.pipe(toArray()).subscribe((v) => expect(v).toEqual([1, 3]));
});
