// Void usually used with functions
// It's a way of saying that function shouldn't return anything

// Function that stops and basically gets opportunity to return - but returns nothing - actually returns undefined. In this case use void type.

// In contrast to "never" type - used when function doesn't even have an opportunity to return anything cause it doesn't ever stop.

// A function that does't return anything
const annoyUser = (num: number): void => {
	for (let i = 0; i < num; i++) {
		alert("HIIIIIIIII!!");
	}
};

// we don't have to annotate it
// but for better readability we can
function printTwice(msg: string): void {
	console.log(msg);
	console.log(msg);
}

// Void is technically a value = type of undefined.
// Use when function stops working.
// If function doesn't stop or throwing an error - use "never" type
