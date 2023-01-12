import _ from "lodash";

export function add(x: number, y: number) {
	// creating some artificial dependency
	// just to see more activities in network tab in chrome dev tools
	return _.add(x, y);
}
export function multiply(x: number, y: number) {
	return x * y;
}
export function divide(x: number, y: number) {
	return x / y;
}
