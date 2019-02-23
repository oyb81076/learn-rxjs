import { concat } from "rxjs/internal/observable/concat";
import { of } from "rxjs/internal/observable/of";
concat(
  of(1, 2, 3),
  of(4, 5, 6),
).subscribe(console.log);
