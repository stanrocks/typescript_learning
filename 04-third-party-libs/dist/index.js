"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// axios => RMB => go to type definition => index.d.ts
// it may be used as a guide of how API works
// For example check class Axios
// it has "get" method that is a generic that accepts type
// and then it provides it as T to AxiosResponse.
// So check type RMB - definition for AxiosResponse
// AxiosResponse has type of data: T
axios_1.default
    // So we can provide type to get method:
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
    console.log("WOOO!");
    // ... and we'll get data with same type
    const { data } = res; // hover over data - it's User
    console.log("Printing company data:");
    console.log(data.company.catchPhrase); // TS (+VSCode) helps with navigation through data structure
    console.log("Printing user:");
    printUser(res.data);
})
    .catch((err) => {
    console.log("ERROR!", err);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
// If we want to get all users:
axios_1.default
    // providing type to generic - it's an array of "user" types
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    console.log("WOOO! ALL USERS:");
    // data's type is User[]:
    res.data.forEach(printUser);
})
    .catch((err) => {
    console.log("ERROR!", err);
});
