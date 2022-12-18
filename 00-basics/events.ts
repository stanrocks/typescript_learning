// Working with events
const form = document.querySelector("#todoform")! as HTMLFormElement;

// (option 1)
// when function is created within event listener - no need to annotate type of e - TS knows from context that e is submit event
form.addEventListener("submit", function (e) {
	e.preventDefault();
	console.log("submitted!");
});

// (option 2)
// but when we handle submit event separatly, TS doesn't know that e has preventDefault method.
// so we need to annotate type like this:

function handleSubmit(e: SubmitEvent) {
	e.preventDefault();
	console.log("submitted!");
}
form.addEventListener("submit", handleSubmit);
