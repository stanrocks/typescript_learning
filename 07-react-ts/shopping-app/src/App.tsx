import React from "react";
import Greeter from "./components/Greeter";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Greeter person="Colt" />
			<Greeter person="Blue" />
			<Greeter person="Elton" />
		</div>
	);
}

export default App;
