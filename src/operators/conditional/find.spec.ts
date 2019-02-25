import { range } from "rxjs";
import { find } from "rxjs/operators";

test("find", () => {
  range(0, 5)
    .pipe(find((x) => x !== 0))
    .subscribe((x) => expect(x).toBe(1));
});
