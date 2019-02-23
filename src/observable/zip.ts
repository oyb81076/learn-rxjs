import { of } from "rxjs/internal/observable/of";
import { zip } from "rxjs/internal/observable/zip";

zip(
  of(1, 2, 3, 4),
  of("a", "b"),
).subscribe(console.log);
