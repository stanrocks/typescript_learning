import React from "react";

interface GreeterProps {
	person: string;
}
// we can provide "props: { person: string }" but when there are multiple props - it gets clunky, so more organized to use interface, like this:
// "props: GreeterProps"
// and even further we can destructurize props:
function Greeter({ person }: GreeterProps): JSX.Element {
	return <h1>Hello, {person}!</h1>;
}

// alternative (obsolete) syntax for functional component with TS:
const Greeter2: React.FC = () => {
	return <h1>Hello!</h1>;
};

export default Greeter;
