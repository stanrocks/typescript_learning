function square(num) {
	num.toUpperCase(); // still valid cause num type is any
	num(); // still valid cause num type is any
	return num * num;
}

square(3); // still valid cause num type is any
square("asd"); // still valid cause num type is any
square(true); //still valid cause num type is any

// Creating a function with typed arguments
// "Function parameter annotation"
const encourageStudent = (name: string) => {
	return `Hey, ${name}, you're doing GREAT!`;
};

// CAN call it with a string argument
encourageStudent("you");

// CAN'T call this fn with other type arguments
encourageStudent(85); // invalid

// Working square function
function square2(num: number) {
	return num * num;
}

square2(3); // works
square2("bebra"); // string argument is not allowed

// =================================================================
// We can have as many parameters as we want:
const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("ChickenFace", 76, false); // valid
doSomething("ChickenFace", 76, 1234); // wargning from TS about last argument - number is not assignable to parameter of type boolean
doSomething("ChickenFace", 76); // wargning from TS - too few arguments

// =================================================================
// Working with default parameters
function greet(person: string = "stranger") {
	return `Hi there, ${person}!`;
}

greet(); // "Hi there, stranger!"
greet("John"); // "Hi there, John!"
greet(123); // not valid - type of number instead of expected string

// =================================================================
// Annotate returned values - what type should function return?
// put expected type after parentheses with arguments
// this is kinda redundant
// cause TS can infer the return type of a function based on what's going on in function.
// but actually it helps to make sure that you don't forget return keyword for example
// and also it helps for dev to read what is expected to be returned

const addNums = (x: number, y: number): number => {
	return x + y;
};

addNums(5, 5);

// =================================================================
// Return different types
// in this case function accepts number as arg and returns string or number

function rando(num: number): string | number {
	// in half cases function returns a string, otherwise - number
	if (Math.random() < 0.5) {
		return num.toString();
	}
	return num;
}

// =================================================================
// Anonymous functions contextual typing

const colors = ["red", "orange", "yellow"];
// no need here to annotate type for "color" cause
// TS knows that "colors" is an array of strings
colors.map((color) => {
	return color.toUpperCase(); // TS knows from context that this method is available for color (type of string)
	color.toFixed(); // TS knows this number method is not available for color (type of string)
});

// =================================================================
// Void type for function return - see void.ts
