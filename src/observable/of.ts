import { of } from "rxjs/internal/observable/of";
of("hello", "world", "!").subscribe(console.log);
