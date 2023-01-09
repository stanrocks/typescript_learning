import { add, sample } from "./utils.js"; // export-import only works in node environment, not in browser, at least by default

sample([12, 3, 34]);
console.log("🚀 ~ file: index.ts:2 ~ sample([12, 3, 34])", sample([12, 3, 34]));
add(1, 2);
console.log("🚀 ~ file: index.ts:4 ~ add(1, 2);", add(1, 2));
