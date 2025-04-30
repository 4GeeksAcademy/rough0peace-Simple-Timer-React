import React, { useEffect } from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./SimpleCounter";

//create your first component
function Home() {

	// setInterval => determines frequency (every second) that counter changes
	// useEffect => helps update counter through setCounter 
	// useState => remembers current count 

	// stores and updates count rendered  
	const [counter, setCounter] = useState(0);

	// updates counter
	
	useEffect(() => {
        console.log("useEffect runs"); // Debugging to verify only runs once

		// counter updates +1 every 1000 milliseconds 
        const interval = setInterval(() => {
            setCounter((counter) => counter + 1); 
        }, 1000);
		
		console.log(counter)

    }, []);

	return (
		<>
			<SimpleCounter />
			{counter}
		</>
	)
};

export default Home