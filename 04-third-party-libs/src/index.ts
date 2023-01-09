import axios from "axios";

// we can create an interface based on data from API:
interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: { lat: string; lng: string };
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

// axios => RMB => go to type definition => index.d.ts
// it may be used as a guide of how API works
// For example check class Axios
// it has "get" method that is a generic that accepts type
// and then it provides it as T to AxiosResponse.
// So check type RMB - definition for AxiosResponse
// AxiosResponse has type of data: T

axios
	// So we can provide type to get method:
	.get<User>("https://jsonplaceholder.typicode.com/users/1")
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

function printUser(user: User) {
	console.log(user.name);
	console.log(user.email);
	console.log(user.phone);
}

// If we want to get all users:
axios
	// providing type to generic - it's an array of "user" types
	.get<User[]>("https://jsonplaceholder.typicode.com/users")
	.then((res) => {
		console.log("WOOO! ALL USERS:");
		// data's type is User[]:
		res.data.forEach(printUser);
	})
	.catch((err) => {
		console.log("ERROR!", err);
	});
