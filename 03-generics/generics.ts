// Generics allow us to define reusable functions and classes that work with multiple types rather than a single type

function wrapInArray<T>(element: T): T[] {
	return [element];
}

// But we already can have function that accepts multiple types, what's the difference?
// Usual approach (with union type):
function doThing(thing: number | string): number | string {
	// here comes some logic that returns number or string
	return "number or a string";
}
// With union type we can accept number or string and return number or string, but they are not correspond with each other - we can accept number but return string. That behavior is determined in function by developer.

// In generics we can define function that get some type of argument and then return the same (!) type. We abstract the type away even further.

// =============================================
// Built-in generic we've already seen:
const nums: number[] = []; // array of numbers (not a generic)
const nums2: Array<number> = []; // alternative syntax (using generic)."Array" is the name of an interface, and type is provided in <>

const colors: Array<string> = ["red", "green"];

// =============================================
// Other example of generic, we've already seen:

document.querySelector("#someId"); // Hover over querySelector - in TS is a method that has angle brackets <> for a generic, and we can provide a particular type to it

// For example we work with HTML form element (and for this actually to work we need to connect it with proper HTML page, but I don't want to waste time):
const inputEl = document.querySelector("#userame");
// If we want to get this element's value, or change it, we usually do this:
inputEl.value = "Changed value";
// but TS says value doesn't exist for type "Element"
// Thats' because querySelector returned to "inputEl" type of "Element", because that is a universal type of element to return from DOM
// And if we know that we accessing Input Element that has "value" property, we can tell that to querySelector using generic:
const inputEl2 = document.querySelector<HTMLInputElement>("#userame")!; // with ! we also say that this element is not a null and really exists
inputEl2.value = "Changed value"; // now this property exists for inputEl2

// Or we can select button with class "btn"
const btn = document.querySelector(".btn");
// Since I know that this btn suppose to be a button element, I can tell that to querySelector:
const btn2 = document.querySelector<HTMLButtonElement>(".btn")!; // this ! means that button is not null

// =============================================
// Writing our own generic
// It accepts some arg and simply return it

// Imagine we want to write a function that accepts argument of some type and then returns value of that type
// Doing this manually for every type:
function numberIdentity(item: number): number {
	return item;
}
function stringIdentity(item: string): string {
	return item;
}
function booleanIdentity(item: boolean): boolean {
	return item;
}

// What if we want universal function? This might seem to work, but:
function identityBad(item: any): any {
	return item; // actually there is no relationship between input and output types
	// and we also want to avoid using type "any" as we can
}

// This is the solution:
function identity<Type>(item: Type): Type {
	return item;
}
// in <> we provide a type ("Type" usually written as "T")
// then we annotate type of argument with same Type
// then we annotate that returned type will be the same Type

// "identity<Type>"" is general form. In case when argument is a string this basically becomes "identity<string>..."

// let's call this function:
identity<number>(7); // valid
identity<string>(7); // invalid
identity<string>("meow"); // valid

interface Cat {
	name: string;
	breed: string;
}

identity<Cat>({ name: "Barsik", breed: "Siberian" });
