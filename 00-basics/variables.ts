let movieTitle: string = "Amadeus"; // redundant
movieTitle = "Arrival";
movieTitle = 9; // not valid
movieTitle.toUpperCase(); // valid cause TS knows that string's method is available

let numCatLives: number = 9; // redundant
numCatLives += 1; // valid
numCatLives = "zero"; // not valid

let isGameOver: boolean = false; // redundant
isGameOver = true;
isGameOver = "true"; // not valid

let nothing: null = null; // valid (but redundant?)
let foo: undefined = undefined; // valid (but redundant?)

// Type Inference
let x = 27; // no need to define type here - redundant
x = "twenty seven"; // not valid cause TS already knows that type is a number

let tvShow = "Breaking Bad"; // TS knows that it's a string
tvShow = "Better Call Saul"; // valid
tvShow = false; // not a valid type

let isFunny = false; // TS knows that it's boolean
isFunny = true; // valid
isFunny = "asd"; // not a valid type

// Delayed Initialization
const movies = ["Interstellar", "Back To The Future", "Inception", "Aliens"];
// If we don't annotate type here - it will be "any" - that's not good
let foundMovie: string;

for (let movie of movies) {
	if (movie === "Interstellar") {
		foundMovie = "Interstellar";
	}
}

foundMovie(); // invalid - string is not callable
foundMovie = 1; // invalid - number is not assignable to string
foundMovie.sdksdfjsdf(); // invalid - no such method for string
