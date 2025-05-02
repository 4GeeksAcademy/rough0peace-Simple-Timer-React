import React, { useEffect } from "react";
import { useState } from "react";
import SimpleCounter from "./SimpleCounter";

//first component
function Home() {

	// stores and updates count rendered  
	const [counter, setCounter] = useState(0);

	// useEffect => helps update counter through setCounter 
	useEffect(() => {
		console.log("useEffect runs");

		// setInterval => determines frequency (every second) that counter changes
		const interval = setInterval(() => {
			setCounter((counter) => counter +1);
		}, 1000);

		return () => clearInterval(interval); // Cleanup function
	}, [counter]); 


	// getSeconds function determines value for each numerical place in clock 
	// Math.floor rounds down and returns largest integar less or equal to starting number 
	// The remainder (%) operator returns the remainder left over when one operand is divided by a second operand
	function getSeconds (someCounter, placeValue){
		return Math.floor(someCounter / placeValue) % 10
	};

	return (
		<>
			<SimpleCounter 
				hundredThousandsPlace={getSeconds(counter, 100000)}
				tenThousandsPlace={getSeconds(counter, 10000)}
				thousandsPlace={getSeconds(counter, 1000)}
				hundredsPlace={getSeconds(counter, 100)}
				tensPlace={getSeconds(counter, 10)}
				onesPlace={getSeconds(counter, 1)}
			/>
		</>
	)
};

export default Home

