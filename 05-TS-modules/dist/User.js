// import type: https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-specific-es-module-syntax
// also can look like this:
// import { type Person, somethingThatIsNotAType } from "./types.js";
// default export:
export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logged out!`);
    }
}
// not a default export:
export function userHelper() {
    console.log("USER HELPER!");
}
