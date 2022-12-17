// Type assertion - we know better what type to expect, and we can tell that to TS.

let mystery: unknown = "Hello world!";

const numChars = mystery.length; // invalid - no method length for unknown type that is not a string

const numChars2 = (mystery as string).length; // valid

// ================================================

// TS infers a type of HTMLElement
const myPic = document.querySelector("profile-image");

// But we know a more specific type, so let's assert it!
const myPic2 = document.querySelector("profile-image") as HTMLImageElement;
