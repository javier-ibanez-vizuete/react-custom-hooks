import { useContext, useEffect } from "react";
import "./App.css";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { LanguageContext } from "./contexts/LanguageContext";
import { CounterBox } from "./components/CounterBox/CounterBox";
import { useResponsive } from "./hooks/useResponsive";
import { PokemonViewer } from "./components/PokemonViewer/PokemonViewer";
import { useDevice } from "./hooks/useDevice";

export const App = () => {
	const { lang, TEXTS, onToggleLang } = useContext(LanguageContext);
	const { isMobile, isTablet, isDesktop } = useDevice();
	const windowWidth = useResponsive();

	useEffect(() => {
		document.title = TEXTS[lang].pageTitle;
	}, [lang]);

	const getResponsiveStyle = (width) => {
		if (!width) return "";
		if (width < 768) return "mobile";
		if (width < 1023) return "tablet";
		return "desktop";
	};

	const responsiveStyle = getResponsiveStyle(windowWidth);

	return (
		<div className={`app ${responsiveStyle}`}>
			<button className="btn btn-primary" onClick={onToggleLang}>
				{lang === "en" ? " Change to Spanish" : " Cambiar a Inglés"}
			</button>

			<h1>{TEXTS[lang].h1}</h1>
			<>
				{isMobile && <h2>{TEXTS[lang].mobileExample}</h2>}
				{isTablet && <h2>{TEXTS[lang].tabletExample}</h2>}
				{isDesktop && <h2>{TEXTS[lang].desktopExample}</h2>}
			</>
			<RegisterForm />

			<CounterBox />

			<PokemonViewer />
		</div>
	);
};
