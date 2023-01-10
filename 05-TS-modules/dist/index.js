import { add, sample } from "./utils.js"; // export-import only works in node environment, not in browser, at least by default
// We can import non-default modules also on separate line like this. Name must to match exported name:
// import { userHelper } from "./User.js";
// or if we want to change name for imported thing, we cans use "as"
// import { sample as pickAnyName } from "./utils.js";
// pickAnyName();
sample([12, 3, 34]);
console.log("🚀 ~ file: index.ts:2 ~ sample([12, 3, 34])", sample([12, 3, 34]));
add(1, 2);
console.log("🚀 ~ file: index.ts:4 ~ add(1, 2);", add(1, 2));
