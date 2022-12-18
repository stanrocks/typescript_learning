// Type assertion - we know better what type to expect, and we can tell that to TS.

let mystery: unknown = "Hello world!";

const numChars = mystery.length; // invalid - no method length for unknown type that is not a string

const numChars2 = (mystery as string).length; // valid

// ================================================
// TS infers a type of HTMLElement
const myPic = document.querySelector("profile-image");

// But we know a more specific type, so let's assert it!
const myPic2 = document.querySelector("profile-image") as HTMLImageElement;

// ================================================
// Type assertions with the DOM

const input = document.getElementById("todoinput")! as HTMLInputElement;
// We can see type using console.dir(input) // HTMLInputElement
// And now when input is defined as HTMLInputElement - we can use methods like input.value:
alert(input.value);

// Alternative syntax for type assertions (instead of "... as ... ")
// by using angle brackets:
alert((<HTMLInputElement>input).value);
// but it's less common
// it doesn't work with JSX i.e. React
