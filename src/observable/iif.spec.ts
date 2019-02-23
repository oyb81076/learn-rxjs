import { iif } from "rxjs/internal/observable/iif";
import { of } from "rxjs/internal/observable/of";
describe("iif", () => {
  test("()=> true", () => {
    iif(() => true, of(true), of(false))
      .subscribe((v) => expect(v).toBe(true))
      ;
  });
  test("subscribe twice", () => {
    let first = true;
    const source = iif(() => first, of("first"), of("second"));
    source.subscribe((v) => expect(v).toBe("first"));
    first = false;
    source.subscribe((v) => expect(v).toBe("second"));
  });
});
