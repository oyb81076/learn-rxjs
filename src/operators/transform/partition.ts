import { range } from "rxjs";
import { partition, toArray } from "rxjs/operators";
const source = range(0, 5);
const part = partition((x: number) => x % 2 === 0);
const [ ob0$, ob1$ ] = part(source);
ob0$.pipe(toArray()).subscribe(console.log);
ob1$.pipe(toArray()).subscribe(console.log);
