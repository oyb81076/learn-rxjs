import { pairs } from "rxjs/internal/observable/pairs";
pairs({ a: 1, b: 2, c: 3 }).subscribe(console.log);
