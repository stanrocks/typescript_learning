// Annotating classes in TS
class Player {
	// Annotating here prop types
	first: string;
	last: string;
	constructor(firstName: string, lastName: string) {
		this.first = firstName;
		this.last = lastName;
	}
}

const elton = new Player("Elton", "Steele");
