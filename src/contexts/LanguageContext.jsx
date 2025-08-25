import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState("en");

	const onToggleLang = () => {
		setLang((prevLang) => (prevLang === "en" ? "es" : "en"));
	};

	const TEXTS = {
		en: {
			pageTitle: "Exercises Custom Hooks",
			h1: "CUSTOM HOOKS",
			registerFormTitle: "Register Form",
			inputNameLabel: "Name",
			inputNamePlaceholder: "Insert a Name",
			inputEmailLabel: "Email",
			inputEmailPlaceholder: "Insert an Email",
			inputPasswordLabel: "Password",
			inputPasswordPlaceholder: "Insert a Password",
			inputRePasswordLabel: "Confirm Password",
			btnSendRegisterForm: "Register",
			noNameField: "Name Field is Required",
			nameFieldShorter: "The Given Name is Too Short",
			nameFieldLonger: "The Given Name is Too Long",
			noEmailField: "Email Field is Required",
			emailNotValid: "The Given Email is not Valid",
			emailShorter: "The Given Email is Too Short",
			noPasswordField: "Password Field is Required",
			passwordShorter: "The Given Password is Too Short",
			passwordLonger: "The Given Password is Too Long",
			noRePasswordField: "Confirm Password Field is Required",
			passwordNotEqual: "Passwords are different",
			emailExistAlert: "The Given Email already Exist",
			btnIncrease: "Increase",
			btnDecrease: "Decrease",
			btnReset: "Reset",
			pokemonNameLabel: "Pokemon Id",
			pokemonExampleId: "Example: (Number '17' is Pidgeotto)",
			pokemonNamePlaceholder: "Insert the Pokemon Id",
			pokemonLoadingText: "We're trying to catch it for you...",
			pokemonFetchError: "Looks like we didn't catch it.",
			mobileExample: "Mobile Size",
			tabletExample: "Tablet Size",
			desktopExample: "Desktop Size",
		},
		es: {
			pageTitle: "Ejercicios Custom Hooks",
			h1: "HOOKS PERSONALIZADOS",
			registerFormTitle: "Formulario de Registro",
			inputNameLabel: "Nombre",
			inputNamePlaceholder: "Introduzca un Nombre",
			inputEmailLabel: "Correo Electrónico",
			inputEmailPlaceholder: "Introduzca un Correo Electrónico",
			inputPasswordLabel: "Contraseña",
			inputPasswordPlaceholder: "Introduzca una contraseña",
			inputRePasswordLabel: "Corfirmar Contraseña",
			btnSendRegisterForm: "Registrarse",
			noNameField: "El campo nombre es obligatorio",
			nameFieldShorter: "El nombre introducido es muy corto",
			nameFieldLonger: "El Nombre introducido es muy Largo",
			noEmailField: "El campo Email es obligatorio",
			emailNotValid: "El Correo Electronico no es Valido",
			emailShorter: "El Email Introducido es muy corto",
			noPasswordField: "El campo Contraseña es Obligatorio",
			passwordShorter: "La Contraseña introducida es muy corta",
			passwordLonger: "La Contraseña introducida es muy larga",
			noRePasswordField: "El campo Confirmar contraseña es Obligatorio",
			passwordNotEqual: "Las Contraseñas no coinciden",
			emailExistAlert: "El Email introducido ya Existe",
			btnIncrease: "Aumentar",
			btnDecrease: "Reducir",
			btnReset: "Reiniciar",
			pokemonNameLabel: "Identificador Del Pokemon",
			pokemonExampleId: "Ejemplo: (El Numero 17 es Pidgeotto)",
			pokemonNamePlaceholder: "Introduzca el Identificador del Pokemon",
			pokemonLoadingText: "Estamos intentando capturarlo para ti...",
			pokemonFetchError: "Vaya! Parece que no hemos conseguido Capturarlo",
			mobileExample: "Tamaño Movil",
			tabletExample: "Tamaño Tablet",
			desktopExample: "Tamaño Escritorio",
		},
	};

	return <LanguageContext value={{ lang, TEXTS, onToggleLang }}>{children}</LanguageContext>;
};
