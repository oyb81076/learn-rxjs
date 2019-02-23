import { from } from "rxjs/internal/observable/from";
describe("from", () => {
  test("from array", (cb) => {
    const expected = [1, 2, 3, 4];
    from([...expected])
      .subscribe((v) => {
        expect(v).toBe(expected.shift());
      }, null, cb);
  });
  test("from iterator", (cb) => {
    function* iterator() {
      yield 1;
      yield 2;
      yield 3;
    }
    const it = iterator();
    from(iterator())
      .subscribe((v) => {
        expect(v).toBe(it.next().value);
      }, null, cb);
  });
  test("from promise", (cb) => {
    from(Promise.resolve("promise"))
      .subscribe((v) => {
        expect(v).toBe("promise");
      }, null, cb);
  });
  test("from map", (cb) => {
    const objMap = new Map<string, string>();
    objMap.set("key", "value");
    from(objMap).subscribe(([key, value]) => {
      expect(key).toBe(key);
      expect(value).toBe(value);
    }, null, cb);
  });
  test("from string", (cb) => {
    const str = "hello world";
    const expected = str.split("");
    from("hello world")
      .subscribe((v) => {
        expect(v).toBe(expected.shift());
      }, null, cb);
  });
});
