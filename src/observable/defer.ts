import { defer } from "rxjs/internal/observable/defer";
import { of } from "rxjs/internal/observable/of";
// 惰性创建
defer(() => of(1)).subscribe(console.log);
