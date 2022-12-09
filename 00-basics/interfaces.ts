// An inteface!
// very similar to type alias with slightly different syntax.
// We can use them to crate reusable, modular types
// that describe the shapes of objects (and objects only?).

// Type recap:
type Person1 = {
	name: string;
	age: number;
};

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
