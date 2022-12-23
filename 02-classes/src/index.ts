// Annotating classes in TS
class Player {
	// Annotating here (before constructor) prop types

	// score = 0; // Class fields in TS (TS will infer that type is number when we set initial value)
	// or we can annotate type explicitly:
	// score: number | string = 0;

	// by default every property or method in class is considered public - everything is accessible outside of class, for example via "elton.first"
	// to be more explicit, to make it clear to other devs -  we can annotate that property is public
	// "public"/"private" - readability or visibility (outside the class), "readonly" - is it rewritable (in this case it's not)
	public readonly first: string; // readonly (optional) feature
	public readonly last: string;
	// private can be annotated with TS syntax using "private" keyword (more cleaner syntax IMO)
	private _score: number = 0;
	// or it can be declared using JS syntax using "#" as usual:
	#score2: number = 0;

	constructor(firstName: string, lastName: string) {
		this.first = firstName;
		this.last = lastName;
	}

	// private method that is accessible only inside class
	private secretMethod(): void {
		console.log("Secret method!");
	}

	// Getter example
	get fullName(): string {
		return `${this.first} ${this.last}`;
	}

	get score(): number {
		return this._score;
	}

	// Setter example
	set score(newScore: number) {
		if (newScore < 0) {
			throw new Error("Score cannot be negative");
		}
		this._score = newScore;
	}
}

const elton = new Player("Elton", "Steele");
elton.secretMethod(); // invalid because secretMethod is only available inside class
elton.fullName; // valid (getting fullname via getter)
elton.fullName = "asdasd"; // invalid (getter only, no setter is available - basically it's a readonly property)
elton.score; // valid - read score
elton.score = -123; // TS allows this, but in runtime it'll throw an error

class Player2 {
	// private - only accessible within this class
	private score: number = 0;
	// protected - accessible within this class and child classes (that inherit from this class)
	protected score2: number = 0;

	// Constructor shorter syntax (longer version see in "Player" constructor):
	constructor(public firstName: string, public lastName: string) {
		// no need to "this.first = firstName", etc
		// curly brackets are empty, wow
	}
}

// Protected example
// Protected property is like private (not accessible outside of class) but still accessible in child classes
class SuperPlayer2 extends Player2 {
	public isAdmin: boolean = true;
	maxScore() {
		this.score = 99999; // invalid - score is private
		this.score2 = 99999; // valid - score2 is protected
	}
}

// ===========================================
// Interface example

interface Colorful {
	color: string;
}

// interface with method expected to return nothing
interface Printable {
	print(): void;
}

// valid:
class Bike implements Colorful {
	color = "blue";
}

// also valid:
class Motorcycle implements Colorful {
	constructor(public color: string) {} // color initialised with value, sent as arg when Motorcycle instance created
}
// like that:
const motorcycle1 = new Motorcycle("red");

// another use of same class and also extra class (printable):
class Jacket implements Colorful, Printable {
	constructor(public brand: string, public color: string) {}
	// method that returns nothing - as expected from "Printable" interface
	print() {
		console.log(`${this.color} ${this.brand} jacket`);
	}
}

const jacket1 = new Jacket("Prada", "black");

// ===========================================
// Abstract classes - exclusive for TS (does not exist in JS)

abstract class Cat {}

new Cat(); // invalid - cannot create an instance of an abstract class

// what's the point?
// this is how we define methods that will be inherited by child classes

// Example:
// - Employee
// 		- FullTimeEmployee
// 		- PartTimeEmployee
// since this class is abstract - we cannot instantiate any instance of Employee itself
abstract class Employee {
	constructor(public first: string, public last: string) {}

	abstract getPay(): number; // this method doesn't exist here, this means - this method should exist in child classes
	// "You must implement method 'getPay' to extend the employee class."
	// It's kinda like interface, but the difference is that we're still able to create methods here:
	greet() {
		console.log("Hello!");
	}
}

// class that extends Employee is only valid if has getPay method:
class FullTimeEmployee extends Employee {
	constructor(first: string, last: string, private salary: number) {
		super(first, last);
	}
	getPay(): number {
		return this.salary;
	}
}

class PartTimeEmployee extends Employee {
	constructor(
		first: string,
		last: string,
		private hourlyRate: number,
		private hoursWorked: number
	) {
		super(first, last);
	}
	getPay(): number {
		return this.hourlyRate * this.hoursWorked;
	}
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay()); // 95000

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay()); // 26400

// so those instances have "getPay" methods, required but not defined in Employee class, but they also have "greet" method that is fully defined in Employee class

// also we can use abstract class and implement interface at the same time if needed
