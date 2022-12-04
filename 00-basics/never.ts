// Use "never" type when:
// 1. A function that doesn't finish running
const gameLoop = (): never => {
	while (true) {
		console.log("Game Loop Running!");
	}
};

// 2. A function that throws an exception
const giveError = (msg: string): never => {
	return ""; // invalid
	throw new Error(msg);
};

// Don't use never type: If function returns nothing and stops running - use void type.

// ================================

// VOID: Function that stops and basically gets opportunity to return - but returns nothing - actually returns undefined. In this case use void type.

// NEVER: In contrast to "never" type - used when function doesn't even have an opportunity to return anything cause it doesn't ever stop.
