import { empty } from "rxjs";
import { throwIfEmpty } from "rxjs/operators";

empty().pipe(throwIfEmpty()).subscribe(null, console.error);
