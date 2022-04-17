import * as things from "./things";
import * as json from "./json"
import {MyApp} from "./dalongrong"
let app = new MyApp("dalong",333)
console.log(app.login())
console.log(MyApp.mydemo())
console.log(things)
let result = json.encode(app)
console.log(result)