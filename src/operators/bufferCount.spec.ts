import { range } from "rxjs/internal/observable/range";
import { bufferCount } from "rxjs/internal/operators/bufferCount";
test("bufferCount", () => {
  const expected = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9],
  ];
  range(0, 10).pipe(bufferCount(4)).subscribe((v) => {
    expect(v).toEqual(expected.shift());
  });
  expect(expected.length).toBe(0);
});
