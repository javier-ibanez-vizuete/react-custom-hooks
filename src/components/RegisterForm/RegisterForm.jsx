import { useContext, useState } from "react";
import { CustomInput } from "../CustomInput/CustomInput";
import "./RegisterForm.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { usePassWordVisibility } from "../../hooks/usePasswordVisibility";
import { UserContext } from "../../contexts/UserContext";

const INITIAL_REGISTER_FORM_DATA = {
	name: "",
	email: "",
	password: "",
	repassword: "",
};

export const RegisterForm = () => {
	const [registerFormData, setRegisterFormData] = useState(INITIAL_REGISTER_FORM_DATA);
	const [errorKey, setErrorKey] = useState("");

	const { lang, TEXTS } = useContext(LanguageContext);
	const { userValidate, userCreate, userLogin } = useContext(UserContext);

	const passwordVisibility1 = usePassWordVisibility();
	const passwordVisibility2 = usePassWordVisibility();

	const { name, email, password, repassword } = registerFormData;

	const onInputChange = (event) => {
		const { name, value } = event.target;
		setErrorKey("");
		setRegisterFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const onFormSubmit = () => {
		const { name, email, password, repassword } = registerFormData;

		if (!name) return setErrorKey("noNameField");
		if (name.length < 2) return setErrorKey("nameFieldShorter");
		if (name.length > 20) return setErrorKey("nameFieldLonger");
		if (!email) return setErrorKey("noEmailField");
		if (!email.includes("@")) return setErrorKey("emailNotValid");
		if (!email.includes(".")) return setErrorKey("emailNotValid");
		if (email.length < 4) return setErrorKey("emailShorter");
		if (!password) return setErrorKey("noPasswordField");
		if (password.length < 8) return setErrorKey("passwordShorter");
		if (password.length > 20) return setErrorKey("passwordLonger");
		if (!repassword) return setErrorKey("noRePasswordField");
		if (password !== repassword) return setErrorKey("passwordNotEqual");

		const newUserData = { name, email, password };

		const userExist = userValidate(newUserData);
		if (userExist) return setErrorKey("emailExistAlert");

		userCreate(newUserData);
		setRegisterFormData(INITIAL_REGISTER_FORM_DATA);
		setErrorKey("");
	};

	return (
		<div className="register-form">
			<h2>{TEXTS[lang].registerFormTitle}</h2>
			<CustomInput inputName={"name"} labelName={TEXTS[lang].inputNameLabel}>
				<input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={onInputChange}
					placeholder={TEXTS[lang].inputNamePlaceholder}
				/>
			</CustomInput>
			<CustomInput inputName={"email"} labelName={TEXTS[lang].inputEmailLabel}>
				<input
					type="text"
					name="email"
					id="email"
					value={email}
					onChange={onInputChange}
					placeholder={TEXTS[lang].inputEmailPlaceholder}
				/>
			</CustomInput>
			<CustomInput inputName={"password"} labelName={TEXTS[lang].inputPasswordLabel}>
				<div className="password-field-container">
					<input
						type={passwordVisibility1.visible ? "text" : "password"}
						name="password"
						id="password"
						value={password}
						onChange={onInputChange}
						placeholder={TEXTS[lang].inputPasswordPlaceholder}
					/>
					<button onClick={passwordVisibility1.toggleVisible}>
						{passwordVisibility1.visible ? "👁️" : "🙈"}
					</button>
				</div>
			</CustomInput>
			<CustomInput inputName={"repassword"} labelName={TEXTS[lang].inputRePasswordLabel}>
				<div className="password-field-container">
					<input
						type={passwordVisibility2.visible ? "text" : "password"}
						name="repassword"
						id="repassword"
						value={repassword}
						onChange={onInputChange}
						placeholder={TEXTS[lang].inputPasswordPlaceholder}
					/>
					<button onClick={passwordVisibility2.toggleVisible}>
						{passwordVisibility2.visible ? "👁️" : "🙈"}
					</button>
				</div>
			</CustomInput>
			{errorKey && <h3 className="error-text">{TEXTS[lang][errorKey]}</h3>}
			<button className="btn btn-secondary" onClick={onFormSubmit}>
				{TEXTS[lang].btnSendRegisterForm}
			</button>
		</div>
	);
};
