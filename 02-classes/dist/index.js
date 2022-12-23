"use strict";
var _Player_score2;
// Annotating classes in TS
class Player {
    constructor(firstName, lastName) {
        // private can be annotated with TS syntax using "private" keyword (more cleaner syntax IMO)
        this._score = 0;
        // or it can be declared using JS syntax using "#" as usual:
        _Player_score2.set(this, 0);
        this.first = firstName;
        this.last = lastName;
    }
    // private method that is accessible only inside class
    secretMethod() {
        console.log("Secret method!");
    }
    // Getter example
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    // Setter example
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
_Player_score2 = new WeakMap();
const elton = new Player("Elton", "Steele");
elton.secretMethod(); // invalid because secretMethod is only available inside class
elton.fullName; // valid (getting fullname via getter)
elton.fullName = "asdasd"; // invalid (getter only, no setter is available - basically it's a readonly property)
elton.score; // valid - read score
elton.score = -123; // TS allows this, but in runtime it'll throw an error
class Player2 {
    // Constructor shorter syntax (longer version see in "Player" constructor):
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // private - only accessible within this class
        this.score = 0;
        // protected - accessible within this class and child classes (that inherit from this class)
        this.score2 = 0;
        // no need to "this.first = firstName", etc
        // curly brackets are empty, wow
    }
}
// Protected example
// Protected property is like private (not accessible outside of class) but still accessible in child classes
class SuperPlayer2 extends Player2 {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this.score = 99999; // invalid - score is private
        this.score2 = 99999; // valid - score2 is protected
    }
}
// valid:
class Bike {
    constructor() {
        this.color = "blue";
    }
}
// also valid:
class Motorcycle {
    constructor(color) {
        this.color = color;
    } // color initialised with value, sent as arg when Motorcycle instance created
}
// like that:
const motorcycle1 = new Motorcycle("red");
// another use of same class and also extra class (printable):
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    // method that returns nothing - as expected from "Printable" interface
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const jacket1 = new Jacket("Prada", "black");
// ===========================================
// Abstract classes - exclusive for TS (does not exist in JS)
class Cat {
}
new Cat(); // invalid - cannot create an instance of an abstract class
// what's the point?
// this is how we define methods that will be inherited by child classes
// Example:
// - Employee
// 		- FullTimeEmployee
// 		- PartTimeEmployee
// since this class is abstract - we cannot instantiate any instance of Employee itself
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    // "You must implement method 'getPay' to extend the employee class."
    // It's kinda like interface, but the difference is that we're still able to create methods here:
    greet() {
        console.log("Hello!");
    }
}
// class that extends Employee is only valid if has getPay method:
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay()); // 95000
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay()); // 26400
// so those instances have "getPay" methods, required but not defined in Employee class, but they also have "greet" method that is fully defined in Employee class
// also we can use abstract class and implement interface at the same time if needed
