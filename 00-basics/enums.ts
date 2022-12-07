// Enums define set of named constants
// Numeric enums
enum Responses {
	no, // 1
	yes, // 2
	maybe, // 3
}

enum Responses2 {
	no = 2, // 2
	yes, // 3
	maybe, // 4
}

enum Responses3 {
	no = 2, // 2
	yes = 10, // 10
	maybe = 24, // 24
}

// String enums
enum Responses4 {
	no = "No",
	yes = "Yes",
	maybe = "Maybe",
}

// Heterogeneous enums
enum Responses5 {
	no = 0,
	yes = 1,
	maybe = "Maybe",
}

// Proper use cases for:
// statuses of order
PENDING;
SHIPPED;
DELIVERED;
RETURNED;
// controls
UP;
DOWN;
LEFT;
RIGHT;
// Sides of the world
NORTH;
SOUTH;
EAST;
WEST;

// example
enum OrderStatus {
	PENDING, // 0
	SHIPPED, // 1
	DELIVERED, // 2
	RETURNED, // 3
}

const currentStatus = OrderStatus.DELIVERED; // 2

function isDelivered(status: OrderStatus) {
	return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED); // false

// example 2
enum ArrowKeys {
	UP = "up",
	DOWN = "down",
	LEFT = "left",
	RIGHT = "right",
}

// thing with enums is that they become a larg amount of code in JS (which is pretty unique for TS)
// some people don't like that

// this might be fixed if we use const before enum:
const enum OrderStatus2 {
	PENDING, // 0
	SHIPPED, // 1
	DELIVERED, // 2
	RETURNED, // 3
} // try that in playground with const and without

const order = {
	orderNumber: 2390902390392,
	status: OrderStatus2.PENDING,
}; // also put this in playground

// some says there is no sense to use enums - one can use objects
// but one good thin in enums is - autocomplete in VSCode
// when typing OrderStatus2. and then VSCode offers completions
