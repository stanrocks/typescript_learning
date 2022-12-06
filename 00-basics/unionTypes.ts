// Several possible types
// Example 1
let age: number | string | boolean = 21; // not a real life example
age = 23; // valid
age = "24"; // also valid
age = true; // also valid

// Example 2 (with custom types)
type Point = {
	x: number;
	y: number;
};

type Loc = {
	lat: number;
	long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 }; // valid
coordinates = { lat: 231.12, long: 23.434 }; // also valid

// ======================================================
// Union types and functions

// function that accepts parameter of number OR string
// and returns nothing
function printAge(age: number | string): void {
	console.log(`You are ${age} years old`);
}

printAge(23); // valid
printAge("87"); // valid

// ===
// Type narrowing with Union Types
// it's doing a type check before working with value

// example 1
const isTeenager = (age: number | string) => {
	if (typeof age === "string") {
		// if age is a string, do this
		// imperfect algorithm
		console.log(age.charAt(0) === "1");
	}
	if (typeof age === "number") {
		// if age is a number, do this
		console.log(age > 12 && age < 20);
	}
};

isTeenager("20"); //false
isTeenager(13); // true
isTeenager("19"); // true
isTeenager("10"); // also true :(

// example 2
function calculateTax(price: number | string, tax: number) {
	if (typeof price === "string") {
		price = parseFloat(price.replace("$", "")); // method for string (".replace") is valid only after type checking with typeof
	}
	// either price started as number or at this point it's been converted to a number
	return price * tax; // multiplication is allowed (valid) only after checking that type is number
}

// ======================================================
// Union types and arrays

// what if we want to create an array with different types of items?
const nums: number[] = [1, 2, 3, 4, 5, 6, "meow"]; // invalid
const stuff: any[] = [1, 2, 3, "meow", true, {}]; // valid, but it's better to avoid type of "any"

// array where any item might be a number or a string (but not boolean for example)
const stuff2: (number | string)[] = [1, 2, 3, "meow"]; // valid

// array of all numbers or an array of all strings:
const stuff3: number[] | string[] = [1, 2, 3]; // valid
// or ["meow", "meow", "meow"] would be valid, but not mixed numbers and strings

// another example
const coords: (Point | Loc)[] = [];
coords.push({ lat: 231.12, long: 23.434 }); // valid
coords.push({ x: 322, y: 342 }); // valid

// ======================================================
// Literal Types
// those not just types - but the values themselves too!
let zero: 0 = 0; // type of 0, wow!
zero = 2; // invalid, only 0 is allowed!

let hi: "hi" = "HI!"; // invalid, only "hi" is allowed

// A function with a literal + union type parameter
const giveAnswer = (answer: "yes" | "no" | "maybe") => {
	return `The answer is ${answer}.`;
};
// CAN provide one of the literals in the union
giveAnswer("no");
// CAN'T provide anything else
giveAnswer("oh boy I'm not sure"); // invalid

// another example
let mood: "Happy" | "Sad" = "Happy"; // valid
mood = "Sad"; // valid
mood = "OK"; // invalid

// one more example
type DayOfWeek =
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday"
	| "Sunday";

let today: DayOfWeek = "Monday"; // valid
today = "weekend"; // invalid
