// Typeof Guards
// Type check before working with value

// Since unions allow multiple types for a value,
// we can first check what came though before working with it.

const isTeenager = (age: number | string) => {
	if (typeof age === "string") {
		// here type is narrowed to a string
		console.log(age.charAt(0) === 1);
	}
	if (typeof age === "number") {
		// here type is narrowed to a number
		// also we can get rid of the if statement, since at this point type might be a number only
		console.log(age > 12 && age < 20);
	}
};

isTeenager("20"); // false
isTeenager(13); // true

// another example

function triple(value: number | string) {
	if (typeof value === "string") {
		// type is narrowed to a string
		return value.repeat(3);
	}
	// type is narrowed to a number
	return value * 3;
}

// but typeof [2,3,4] (typeof for any array) will return "object"
// so we can use typeof guard when dealing with primitive types

// =============================================================
// Truthiness Guard

// Checking a value for being truthy or falsy before working with it.
// This is helpful in avoiding errors when values might be null or undefined

// we could also write anotation as (word?: string)
const printLetters = (word: string | null) => {
	if (!word) {
		// If word is null, don't loop over it
		console.log("No word was provided.");
	} else {
		// Only loop if word exists/is truthy
		for (let char of word) {
			console.log(char);
		}
	}
};

// Another example
const el = document.getElementById("idk"); // el type is HTMLElement or null (when there is no element with that id)
if (el) {
	// here type of el is HTMLElement, type is narroweed
} else {
	// here type is null
}

// empty string '' is still a string, but it's falsy, so careful with that

// =============================================================
// Equality Type Guard
// equality Type Guards involve comparing types to each other
// before doing certain operations with values.

// By checking two values against one another, we can be sure
// they're both the same before working with them
// in a type-specific way.

const someFunc = (x: string | boolean, y: string | number) => {
	if (x === y) {
		// x and y are strings in this case
		x.toUpperCase();
		y.toLowerCase();
	} else {
		console.log(x);
		console.log(y);
	}
};

// =============================================================
// "in" Operator Narrowing

// Javascript's in operator helps check if a certain property exists in an object.
// This means we can use it to check if a value exists in an object, according to its type alias or aliases, before working with it.

type Cat = { meow: () => void };
type Dog = { bark: () => void };

const talk = (creature: Cat | Dog) => {
	if ("meow" in creature) {
		console.log(creature.meow());
	} else {
		console.log(creature.bark());
	}
};

const kitty: Cat = { meow: () => "MEOWWW" };
talk(kitty); // MEOWWW

// =============================================================
// "instanceof" Narrowing

// instanceof is a Javascript operator that allows us to check if one thing is an instance of another (remember prototypes?).
// This can help us narrow types when working with things like classes.

function printFullDate(date: Date | string) {
	if (date instanceof Date) {
		return date.toUTCString();
	} else {
		return new Date(date).toUTCString();
	}
}

// =============================================================
// Type Predicates

// Typescript allows us to write custom functions that can narrow the type of a value. These functions have a very special return type called a type predicate.
// A predicate takes the form parameterName is Type (": pet is Dog" or ": pet is Cat")

interface Cat2 {
	name: string;
	numLives: number;
}

interface Dog2 {
	name: string;
	breed: string;
}

// ": animal is Cat2" - type predicate
function isCat(animal: Cat2 | Dog2): animal is Cat2 {
	// function should return true or false
	return (animal as Cat2).numLives !== undefined;
}

function makeNoise(animal: Cat2 | Dog2): string {
	if (isCat(animal)) {
		// here animal is a Cat2
		// but without predicate TS wouldn't know that
		animal.numLives = 5;
		return "Meow";
	} else {
		// here animal is a Dog2
		animal.breed = "husky";
	}
}

// =============================================================
// Discriminated Unions

// A common pattern in Typescript involves creating a literal property that is common across multiple types.
// We can then narrow the type using that literal property

interface Circle {
	kind: "circle";
	radius: number;
}

interface Square {
	kind: "square";
	sideLength: number;
}

// Another example

interface Rooster {
	name: string;
	weight: number;
	age: number;
	kind: "rooster";
}

interface Cow {
	name: string;
	weight: number;
	age: number;
	kind: "cow";
}

interface Pig {
	name: string;
	weight: number;
	age: number;
	kind: "pig";
}

interface Sheep {
	name: string;
	weight: number;
	age: number;
	kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
	// what is animal here? it's pig or rooster or cow
	// we can't test it for some unique method since all interfaces have the same structure with same properties (name, weight, age)
	// so we are adding common property "kind" to all interfaces
	// sometimes instead of kind it's type or __type or type__name or TYPE
	// This is basically adding a label
	switch (animal.kind) {
		case "pig":
			// animal type here is Pig (from interface name)
			animal; // check by hovering
			return "Oink!";
		case "cow":
			// animal type here is Cow (from interface name)
			return "Mooooo!";
		case "rooster":
			// animal here is Rooster (from interface name)
			return "Cockadoodledoo!";
		default:
			// We should never make it here, if we handled all cases correctly
			// Try create new interface for new animal and see
			// It will tell here what type is not handled by this switch (Sheep in our example)
			// And to fix this we need to add another case inside switch (case "sheep")

			// const shouldNeverGetHere: never = animal;
			// return shouldNeverGetHere;

			// Real-life name for that function is:
			const _exhaustiveCheck: never = animal;
			return _exhaustiveCheck;
	}
}

const stevie: Rooster = {
	name: "Stevie Chicks",
	weight: 2,
	age: 1.5,
	kind: "rooster",
};

console.log(getFarmAnimalSound(stevie)); // "Cockadoodledoo!"
