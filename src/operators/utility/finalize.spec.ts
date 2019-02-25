import { range } from "rxjs";
import { finalize } from "rxjs/operators";

test("finalize", () => {
  let final = false;
  range(0, 4)
    .pipe(finalize(() => final = true))
    .subscribe(() => {
      expect(final).toBe(false);
    }, null, () => {
      expect(final).toBe(false);
    });
  expect(final).toBe(true);
});
