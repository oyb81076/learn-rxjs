import { range } from "rxjs";
import { ignoreElements } from "rxjs/operators";

range(0, 4)
.pipe(ignoreElements())
.subscribe(console.log.bind(null, "never"), console.error, console.log.bind(null, "complete"));
