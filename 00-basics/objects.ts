// A function with an object type parameter
const printName = (name: { first: string; last: string }): string => {
	return `Name: ${name.first} ${name.last}`;
};

printName({ first: "Will", last: "Ferrell" });
// Name: Will Ferrell

// ============================================
// Object variable with type annotation
let coordinate: { x: number; y: number } = { x: 34, y: 49 };

// ============================================
// Return (object) type annotation
function randomCoordinate(): { x: number; y: number } {
	return { x: Math.random(), y: Math.random() };
}

// ============================================
// Excess Properties - there is a tricky thing with this
printName({ first: "Mick", last: "Jagger", age: 473 }); // this will complain about age. Typescript authors decided not to let this happen - no inline excess parameters are allowed in object literal
// but you can do this (store object in variable), and it will be valid:
const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer); // valid!!! TS is checking only for properties that are defined in annotation and any excess properties are ignored

// ============================================
// Type Alias (great for reusing type)
type Person = {
	name: string;
	age: number;
};

// Use the type alias in the annotation
const sayHappyBirthday = (person: Person) => {
	return `Hey ${person.name}, congrats on turning ${person.age}!`;
};
sayHappyBirthday({ name: "Jerry", age: 42 });

// example with coordinates
type Point = {
	x: number;
	y: number;
};

// var uses type alias
let coordinate2: Point = { x: 23, y: 534 }; // valid

// function returns something with type annotated via alias
function randomCoordinate2(): Point {
	return { x: Math.random(), y: Math.random() };
}

// this function accepts Point as an argument and returns a Point
function doublePoint(point: Point): Point {
	return { x: point.x * 2, y: point.y * 2 };
}

// ============================================
// Nested objects. Function accepts a parameter "person" which is an object with nested object (parentNames)
const describePerson = (person: {
	name: string;
	age: number;
	parentNames: {
		mom: string;
		dad: string;
	};
}) => {
	return `Person: ${person.name},
  Age: ${person.age}
  parents: ${person.parentNames.mom}, ${person.parentNames.dad}.`;
};

describePerson({
	name: "Jimmy",
	age: 10,
	parentNames: { mom: "Kim", dad: "Steve" },
});

// ============================================
// Optional properties

// z is optional, x and y are required
type PointWithOptionalThirdDimension = {
	x: number;
	y: number;
	z?: number;
};

const myPoint: PointWithOptionalThirdDimension = { x: 1, y: 6, z: 4 }; // valid
const myPoint2: PointWithOptionalThirdDimension = { x: 1, y: 6 }; // also valid even without property "z"

// ============================================
// Readonly modifier

type User = {
	readonly id: number;
	username: string;
};

// can define id once
const user: User = {
	id: 12378,
	username: "catgurl",
};

// can read id
console.log(user.id);

// cannot rewrite id
user.id = 784278247824; // invalid. readonly

// ============================================
// Intersection type = use "&"

type Circle = {
	radius: number;
};

type Colorful = {
	color: string;
};

// direct intersection without anything added
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
	radius: 5,
	color: "yellow",
};

// other example
type Cat = {
	numLives: number;
};

type Dog = {
	breed: string;
};

// intersection with extension (adding new typed property)
type CatDog = Cat &
	Dog & {
		age: number;
	};

const christy: CatDog = {
	numLives: 7,
	breed: "Husky",
	age: 9,
};
