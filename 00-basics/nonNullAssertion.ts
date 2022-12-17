// Non-Null Assertion Operator

const btn = document.getElementById("btn");

// By default TS assumes that btn is HTMLElement or null
// because it's not sure that getElementById will find an element.

// And for example if we're adding an event listener to that button
// we have to go safe way and check if that's not null (usnig question mark)
btn?.addEventListener("click", () => alert("CLICKED!"));

// But we can add exclamation mark in the end:
const btn2 = document.getElementById("btn")!;
// Now TS knows for sure that btn2 exists
// It's not gonna expect that it might be null
// In that case we don't need question marks all over the place
// But we have to be sure that this element actually exists
