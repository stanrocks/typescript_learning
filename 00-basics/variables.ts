let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9; // not valid
movieTitle.toUpperCase(); // valid since TS knows that string's method is available

let numCatLives: number = 9;
numCatLives += 1; // valid
numCatLives = "zero"; // not valid

let isGameOver: boolean = false;
isGameOver = true;
isGameOver = "true"; // not valid
