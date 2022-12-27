// https://www.typescriptlang.org/docs/handbook/2/generics.html

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

// =============================================
// Writing our own generic function - 2

// Let's create a function that accepts a list and return one of its element
// It might accept array of numbers, booleans or objects:
// [4,5,6]
// [true, false, true]
// [{cat object}, {another cat object}, {one more cat object}]
// and pick one of them and return it

// function of getRandomElement captures argument type as T, accepts an array of type T as an argument and returns value of type T:
function getRandomElement<T>(list: T[]): T {
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex];
}

// list is supposed to be an array of strings and returned value should be a string
getRandomElement<string>(["a", "b", "c"]);
// same for numbers:
getRandomElement<number>([1, 2, 3, 4]);
// list is supposed to be Cat attay and returned value should be type of Cat
getRandomElement<Cat>([
	{ name: "Barsik", breed: "Siberian" },
	{ name: "Bebra", breed: "unknown" },
]);

// SO RELATIONSHIP IS NOW EXPRESSED between input and output types
// Whatever type we provide to the generic as the type parameter - same type should be returned. And no matter what type it will be, it might be unknow for us now.

// =============================================
// Inferred Generic Type Parameters

// When we call generic function, no need to specify type - TS is smart enough to understand that this is a list of strings:
getRandomElement(["qewr", "sdfdf", "sdfdsf"]);
// So TS can figure out that in this case T is string

// or T is number:
getRandomElement([31337, 42, 69]);

// But it's not gonna know what type of DOM element this will return, because DOM doesn't exist yet when we type TS code and TS doesn't know what type is ".btn":
const button = document.querySelector(".btn");

// so in this case we need to provide type parameter like this
const button2 = document.querySelector<HTMLButtonElement>(".btn")!;

// =============================================
// Generics With Multiple Types

// Provide several parameters inside <>.
// No need to specify what type will be returned, because it infers that type will be an intersection between T and U (hover to see "T & U"):
function merge<T, U>(object1: T, object2: U) {
	return {
		...object1,
		...object2,
	};
}

const comboObj = merge({ name: "stan" }, { pets: ["barsik", "koshka"] });

// =============================================
// Adding Type Constraints

merge({ name: "stan" }, 9); // 9 is not gonna be added to object, because spread will not work with number - it's not iterable
// We should avoid using spread operator on numbers and not accept numbers as argument to a function that will use spread on that argument
// That's why we extend type of T with object - it means that it will be an object with some values inside - it might be a string or a num - whatever
function merge2<T extends object, U extends object>(object1: T, object2: U) {
	return {
		...object1,
		...object2,
	};
}

merge2({ name: "stan" }, 9); // now 9 is not valid anymore since its not an object

merge2({ name: "stan" }, { num: 9 }); // now its valid and spreadable

// Other example - interface as a constraint

function printDoubleLength<T>(thing: T): number {
	return thing.length * 2; // invalid - because T might be something that doesn't have a length
}

// Let's create interface
interface Lengthy {
	length: number;
}

// Lets create same function with different type parameter
function printDoubleLength2<T extends Lengthy>(thing: T): number {
	return thing.length * 2; // now it's valid
}

printDoubleLength2("sdf"); // valid because string has length
printDoubleLength2(123); // invalid - number has no lenght

// Its not a great use of generic
// We might simply make function like this:
function printDoubleLength3(thing: Lengthy): number {
	return thing.length * 2;
}
// But it just shows how to constraint a generic when we really neew to use generic

// =============================================
// Default Type Parameters

function makeEmptyArray<T>(): T[] {
	return [];
}

// If we provide typpe parameter as string - we get string array:
const strings = makeEmptyArray<string>(); // type is string[] (string array)
strings.push("meow"); // valid

// If we do not provide type parameter - we get an array of unknown type
const arr = makeEmptyArray(); // type is unknown[]

// If we want to provide a different default value, like number or any or numbers and strings we can do this (number type by default):
function makeEmptyArray2<T = number>(): T[] {
	return [];
}

const arr2 = makeEmptyArray2(); // type is number[] (as default)
const arr3 = makeEmptyArray2<boolean>(); // type is boolean[]

// =============================================
// Writing Generic Classes

// Imagine we have an app where user can create Video Playlist or Song Playlist:

interface Song {
	title: string;
	artist: string;
}

interface Video {
	title: string;
	creator: string;
	resolution: string;
}

// class VideoPlaylist {
// 	public videos: Video[] = [];
// }

// class SongPlaylist {
// 	public songs: Song[] = [];
// }

// Instead of those classes we can create generic class:
class Playlist<T> {
	public queue: T[] = [];
	add(el: T) {
		this.queue.push(el);
	}
}

// We can create instance of Playlist of type Song:
const songs = new Playlist<Song>();
songs.add({ title: "Last Christmas", artist: "George Michael" }); // added song should match the pattern of Song interface

// And using same generic class we can create and array of videos, and when videos are added - they should match the pattern of Playlist interface:
const videos = new Playlist<Video>();
videos.add({
	title: "Cat meowing",
	creator: "coolguy1994",
	resolution: "fullhd",
});
