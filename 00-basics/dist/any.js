"use strict";
const myComplicatedData = "I'm gonna be complicated!";
// this kinda defeats the purpose of TS
// so genereally you don't want to use it
// the any type
let thing = "hello";
thing = 1; // valid
thing = false; // also valid
thing(); // it's a boolean, not a function, but TS will not show that it's not valid
thing.toUpperCase(); // no such method for boolean, but TS will not show that it's not valid
let thing2 = "hello";
thing2(); // TS says that it's not valid, cause it's a string, not a function, string is not callable
thing2.lsdfjkkjsf(); // TS says it's not valid - no such method for a string
