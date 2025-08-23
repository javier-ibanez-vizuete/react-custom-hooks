import { useContext } from "react";
import "./App.css";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { LanguageContext } from "./contexts/LanguageContext";

export const App = () => {
	const { lang, TEXTS, onToggleLang } = useContext(LanguageContext);

	return (
		<>
			<button className="btn btn-primary" onClick={onToggleLang}>
				{lang === "en" ? " Change to Spanish" : " Cambiar a Inglés"}
			</button>

			<h1>{TEXTS[lang].h1}</h1>
			<RegisterForm />
		</>
	);
};
