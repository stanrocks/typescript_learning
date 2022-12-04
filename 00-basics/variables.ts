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
