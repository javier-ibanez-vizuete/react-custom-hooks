import { useContext } from "react";
import "./CounterBox.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useCounter } from "../../hooks/useCounter";

export const CounterBox = ({ number }) => {
	const { lang, TEXTS } = useContext(LanguageContext);
	const { count, incrementCounter, decrementCounter, resetCounter } = useCounter(() => {
		if (!number) return 0;
		return number;
	});

	return (
		<div className="counter-box">
			<h3>{count}</h3>
			<div className="btns-counters-container">
				<button className="btn btn-secondary" onClick={incrementCounter}>
					{TEXTS[lang].btnIncrease}
				</button>
				<button className="btn btn-secondary" onClick={decrementCounter}>
					{TEXTS[lang].btnDecrease}
				</button>
				<button className="btn btn-secondary" onClick={resetCounter}>
					{TEXTS[lang].btnReset}
				</button>
			</div>
		</div>
	);
};
