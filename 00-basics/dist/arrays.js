"use strict";
// Array types
// Using brackets:
let names = ["John", "Mike"];
let ages = [12, 42, 36];
// Alternative syntax:
let names2 = ["John", "Mike"];
let ages2 = [12, 42, 36];
names.push(12); // invalid - don't push numbers in array of strings pls
// then - array with that custom type:
// coord is an array of type Point
const coords = []; // empty array at first, for example
coords.push({ x: 23, y: 8 }); // valid
coords.push({ y: 8 }); // invalid (pushing something that is not a Point type - missing "x")
// ==========================================================
// Multidimensional Arrays
// just add another square brackets in annotation:
const board = [
    ["X", "O", "X"],
    ["O", "X", "X"],
    ["X", "O", "O"],
]; // two dimensions are valid
const board2 = [
    ["X", "O", "X"],
    ["O", "X", "X"],
    ["X", "O", "O", ["third dimension"]],
]; // third dimension is not valid
// lets annotate array of three dimensions (of numbers):
const demo = [[[1]]]; // valid
