// import type: https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-specific-es-module-syntax

import type { Person } from "./types.js";
// also can look like this:
// import { type Person, somethingThatIsNotAType } from "./types.js";

// default export:
export default class User implements Person {
	constructor(public username: string, public email: string) {}
	logout() {
		console.log(`${this.username} logged out!`);
	}
}

// not a default export:
export function userHelper() {
	console.log("USER HELPER!");
}
