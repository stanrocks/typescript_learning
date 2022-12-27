// Working with generics in JSX (i.e. React) in TSX-files and using arrow functions

// <> are used for components
// and also they are used in TS generics

// When we write a function like this - its totally valid. It's able to parse and understand that this <T> is a type parameter, not a react component:
function getRandomElement<T>(list: T[]): T {
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex];
}

// but it's going crazy when using arrow functions:
// const getRandomElement2 = <T>(list: T[]): T => {
// 	const randomIndex = Math.floor(Math.random() * list.length);
// 	return list[randomIndex];
// }

// to fix it we need to add a trailing comma inside <>:
const getRandomElement3 = <T,>(list: T[]): T => {
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex];
};
