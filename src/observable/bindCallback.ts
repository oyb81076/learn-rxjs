import { exists } from "fs";
import { bindCallback } from "rxjs";

const findName = bindCallback((id: number, cb: (name: string) => void) => {
  console.log("start to find name");
  process.nextTick(() => {
    cb("nameid:" + id);
  });
});

findName(2).subscribe(console.log);

const observableExists = bindCallback(exists);

observableExists(__filename).subscribe((v) => {
  console.log("file %s is exists? %s", __filename, v);
});
