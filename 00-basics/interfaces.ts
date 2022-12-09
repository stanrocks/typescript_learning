// An inteface!
// very similar to type alias with slightly different syntax.
// We can use them to crate reusable, modular types
// that describe the shapes of objects (and objects only?).

// Differences:
// Interface describes shape of object only (can't describe literals)
// We can reopen interfaces and can't do same with type aliases
// We can extend interfaces (like class in OOP) with extend keyword,
// but to extend type alias we should use "&"

// Type alias recap:
type Person1 = {
	name: string;
	age: number;
};

// Only type can describe this (union type between two literals):
type Color = "red" | "blue";

interface Person {
	name: string; // alternatively - use commas
	age: number;
}

// Use the type alias tn the annotation
const sayHappyBirthday = (person: Person): string => {
	return `Hey ${person.name}, congrats on turning ${person.age}!`;
};

sayHappyBirthday({ name: "Jerry", age: 42 });

// =======================================================
// Optional and readonly properties
interface Person2 {
	readonly id: number;
	first: string;
	last: string;
	nickname?: string; // optional prop - with question mark
}

const thomas: Person2 = { first: "Thomas", last: "Hardy", id: 123 }; // valid
const thomas2: Person2 = {
	first: "Thomas",
	last: "Hardy",
	nickname: "Tom",
	id: 123,
}; // also valid, with optional prop
const thomas3: Person2 = { first: "Thomas", id: 123 }; // invalid - no required "last" prop

thomas.first = "kldslskd"; // valid - we CAN change value of not readonly props
thomas.id = 9999; // invalid - CAN'T change readonly property

// =======================================================
// Interface methods
interface Person3 {
	readonly id: number;
	first: string;
	last: string;
	nickname?: string;
	// not a function, but a method, that accepts nothing and returns a string:
	sayHi: () => string;
	// alternative syntax for annotation:
	sayBye(): string;
}

const thomas4: Person3 = {
	first: "Thomas",
	last: "Hardy",
	nickname: "Tom",
	id: 123,
	// valid method that accepts nothing and returns a string:
	sayHi: () => {
		return "Hello!";
	},
	sayBye: () => {
		return "Bye!";
	},
};

// example 2 - when method accepts argument
interface Product {
	name: string;
	price: number;
	// method accepts a number and returns a number (no real logic here)
	applyDiscount(discount: number): number; // instead of 'discount' there might be any name - prefferably understandable by dev
}

const shoes: Product = {
	name: "Blue Suede Shoes",
	price: 100,
	applyDiscount(amount: number) {
		// for example discount amount = 0.3 (30%)
		// in that case price multilplicator:
		// 1 - 0.3 = 0.7 (70% of price still left)
		const newPrice = this.price * (1 - amount);
		this.price = newPrice;
		return this.price;
	},
};

console.log(shoes.applyDiscount(0.4)); // 60

// =======================================================
// Reopening interfaces
// It's possible to reopen an add new props to interface
// which is NOT possible with types

// Type (unable to add new props)
type Person10 = {
	name: string;
};

// Error - duplicate identifier
type Person10 = {
	age: number;
};

// Interface (able to add new props)
// At first we have interface:
interface Person11 {
	name: string;
}

// Then we reopening it and adding prop:
// it's not redeclaring/rewriting interface
// it's combining
// this means person11 ALSO has an age:
interface Person11 {
	age: number;
}

// Perfectly okay - person has name & age
const person: Person11 = {
	name: "Jerry",
	age: 42,
};

// example 2
// imagine that we have interface declared inside some other file:
interface Dog {
	name: string;
	age: number;
}

// inside our file - we want a dog to have extra props
interface Dog {
	breed: string;
	bark(): string;
}

const elton: Dog = {
	name: "Elton",
	age: 0.5,
	breed: "Australian Shepherd",
	bark() {
		return "WOOF WOOF!";
	},
};

// =======================================================
// Extending interfaces
// like with OOP and classes

// What if we want a service-dog - it's different type that inherits props from dogs but has something special

interface ServiceDog extends Dog {
	job: "drug snffer" | "bomb sniffer" | "guide dog";
}

const chewy: ServiceDog = {
	name: "Chewy",
	age: 4.5,
	breed: "Lab",
	bark() {
		return "Bark!";
	},
	job: "guide dog",
};

// =======================================================
// Interface Multiple Inheritance

interface Human {
	name: string;
}

interface Employee {
	readonly id: number;
	email: string;
}

// use comma to separate multiplie inherited interfaces:
interface Engineer extends Human, Employee {
	level: string;
	languages: string[];
}

const pierre: Engineer = {
	name: "Pierre",
	id: 23443,
	email: "pierre@gmail.com",
	level: "senior",
	languages: ["JS", "Python"],
};
