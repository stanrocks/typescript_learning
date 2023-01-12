// without webpach this will not work after transpilig to JS, because whatever there is in "dist" - it will not have access to lodash node module. We have to add lodash to dist using webpack
import _ from "lodash";
export function add(x, y) {
	// creating some artificial dependency
	// just to see more activities in network tab in chrome dev tools
	return _.add(x, y);
}
export function multiply(x, y) {
	return x * y;
}
export function divide(x, y) {
	return x / y;
}
