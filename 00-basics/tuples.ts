// Tuples are special type exclusive for TS
// (they don't exist in JS)
// Tuples are arrays of fixed lengths
// and ordered with specific types - like
// super rigid arrays
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types

// Creating a Tuple with its type definition
let myTuple: [number, string];

// CAN assign it values per its specs
myTuple = [10, "Typescript is fun!"]; // valid

// CAN'T assign it values of a different structure
myTuple = ["Typescript is fun!", 10]; // invalid

// Tuples are not used often - usually
// it's more clear to use objects

// Limitation of tuple - under the TS hood it's still
// just an array. And we are able to use push and pop
// to change it (which defeats purpose of tuple creation).

myTuple.pop(); // oops!
myTuple.push(123); // oops! we still can push number
myTuple.push("meow"); // or string (cause those types are in annotation)

// To prevent this - use "readonly"
// https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-tuple-types
function doSomething(pair: readonly [string, number]) {
	// ...
}

function doSomething(pair: readonly [string, number]) {
	pair[0] = "hello!"; // invalid
}

const point: readonly [number, number] = [0, 0];
point.push(0); // invalid
