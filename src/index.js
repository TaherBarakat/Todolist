import { sayhi } from "./dom.js";
class project {
   constructor(a) {
      this.a = a;
   }

   say() {
      return "hi";
   }
   lol = () => this;
}
let a = new project(1);
let f = new project(4);
console.log(sayhi());
