import { iif } from "rxjs/internal/observable/iif";
import { of } from "rxjs/internal/observable/of";
let first = true;
const source = iif(() => first, of("first"), of("second"));
source.subscribe(console.log);
first = false;
source.subscribe(console.log);
