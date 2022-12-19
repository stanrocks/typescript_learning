// JS classes recap
// Our blueprint for a person
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet() {
		return `Hello ${this.name}!`;
	}
}

// Using our blueprint to make a real person
const jimmy = new Person("Jimmy", 25);

// Using some methods that our new object has
// based on the blueprints
jimmy.greet(); // Hello Jimmy!

// Another example
class Player {
	// if we put "static" before property - this property will not exist in individual instances, it'll exist in class
	// player1.description - not accessible
	// Player.description - accessible
	static description = "Player In Our Game";
	// static usually used to instantiate something, like new player in our example
	static randomPlayer() {
		return new Player("Andy", "Samberg"); // randomizing code here
	}

	// "class fields" - other (shorter) way to set hardcoded default initial values (no need to use this.score = 0 inside constructor):
	_scoreOld = 0; // underscore means - please don't touch this outside the class (don't manipulate score aka cheating)
	// new way of denying access to var in class is this (private field):
	#score = 0; // this should be usable only inside class
	numLives = 10;
	constructor(firstName, lastName) {
		// this special function is called automatically when player is created, no need to call it manually.
		// it usually accepts arguments
		console.log("IN CONSTRUCTOR!");
		// "this" refers to the particular instance
		this.first = firstName;
		this.last = lastName;
		// this.score = 0; // one way to set some default values
		// this.numLives = 10; // one way to set some default values
	}
	// Getter example:
	// (getter basically turns function into a property)
	get fullName() {
		return `${this.first} ${this.last}`;
	}
	// Setter example:
	set fullName(newName) {
		const [first, last] = newName.split(" ");
		this.first = first;
		this.last = last;
	}
	// also getter example (much cleaner syntax):
	// creates property "score" for player
	get score() {
		return this.#score;
	}
	// this is not so clean syntax:
	getScore() {
		return this.#score;
	}

	// Setter example
	set score(newScore) {
		// we can implement some logic here, that will allow (or not) to set new score
		if (newScore <= 0) {
			throw new Error("score must be positive");
		}
		this.#score = newScore;
	}
	updateScore(newScore) {
		this.#score = newScore;
	}
	taunt() {
		console.log("BOOYAH!");
	}
	loseLife() {
		this.numLives -= 1;
	}
	//same as private variables - we can create private methods:
	#secret() {
		console.log("SECRET!!!");
	}
}

const player1 = new Player("stan", "rocks");
player1.taunt();
console.log(player1.first);
console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);
player1._scoreOld = 9999; // valid - able to cheat like this
player1.#score = 999999; // invalid - private field! - not accessible like that
player1.getScore(); // valid - just shows score - basically readonly
// instead of using getScore method - easier to use getter:
// no need in "()"
console.log(player1.score); // and it's still readonly
player1.score = -783783; // this is ignored, cause it's a getter, not a setter (actually later I implemented setter with same name)

player1.#secret(); // invalid - private field! - not accessible like that

// using getter:
player1.fullName; // "stan rocks"
// using setter:
player1.fullName = "stan yupkees"; // this.first = "stan", this.last = "yupkees"

const player2 = new Player("charlie", "brown");
player2.taunt();

// using static method, accessible from class only:
const player3 = Player.randomPlayer();

// =========================================
// Inheritance and "super()" example:
class AdminPlayer extends Player {
	constructor(first, last, powers) {
		super(first, last); // to use constructor in child class we need to use super() - it references the constructor of superclass. We can send there expected props
		this.powers = powers;
	}

	// some code here that adds functionality to admin that differentiate admin from regular player
	isAdmin = true;
}

const admin = new AdminPlayer();

console.log(admin.firstName); // firstName inherited from class Player

const admin2 = new AdminPlayer("admin", "mCadmin", [
	"delete world",
	"restore world",
]); // args are: first name, last name, powers
