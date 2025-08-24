import { useState } from "react";

export const useCounter = (initialValue = 0) => {
	const [count, setCount] = useState(initialValue);

	const incrementCounter = () => {
		setCount((prevValue) => prevValue + 1);
	};

	const decrementCounter = () => {
		setCount((prevValue) => prevValue - 1);
	};

	const resetCounter = () => {
		setCount(initialValue);
	};

	return { count, incrementCounter, decrementCounter, resetCounter };
};
