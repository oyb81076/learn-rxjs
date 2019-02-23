// 不要用, 不知道这个干什么用的
import { bindCallback } from "rxjs/internal/observable/bindCallback";
import { startWith } from "rxjs/internal/operators/startWith";
const callback = (arg: string) => {
  console.log("run callback :" + arg);
};
const ob = bindCallback(callback);
const source = ob("arg1");
source.pipe(startWith("arg0")).subscribe(console.log);
source.pipe(startWith("arg0")).subscribe(console.log);
