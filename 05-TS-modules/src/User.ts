// default export:
export default class User {
	constructor(public username: string, public email: string) {}
	logout() {
		console.log(`${this.username} logged out!`);
	}
}

// not a default export:
export function userHelper() {
	console.log("USER HELPER!");
}
