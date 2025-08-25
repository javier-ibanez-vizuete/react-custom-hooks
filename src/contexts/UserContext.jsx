import { createContext, useEffect, useState } from "react";

const INITIAL_USERS_DATABASE = [
	{ id: 1, name: "admin", email: "admin@admin.com", password: "adminadmin", role: "admin", active: false },
];

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [usersDataBase, setUserDataBase] = useState(INITIAL_USERS_DATABASE);
	const [userActive, setUserActive] = useState(null);

	const generateNewId = () => {
		const randomId = Number((Math.random() * 10000).toFixed(0));
		const idExist = usersDataBase.some(({ id }) => id === randomId);
		if (idExist) return generateNewId();
		return randomId;
	};

	const userValidate = (userData) => {
		const { email } = userData;
		const userExist = usersDataBase.find((user) => user.email === email);
		if (userExist) return true;
		return false;
	};

	const userLogin = (userData) => {
		const validUser = usersDataBase.some((user) => {
			const emailEqual = user.email === userData.email;
			const passwordEqual = user.password === userData.password;
			return emailEqual && passwordEqual;
		});
		console.log("Que vale validUser", validUser);
		if (!validUser) return false;
		console.log("Pase el if de valid USer");
		const currentUser = usersDataBase.find((user) => user.email === userData.email);
		if (currentUser) return false;
		console.log("Pase el if de CurrentUser");
		setUserActive({ ...currentUser });
		return;
	};

	const userCreate = (userData) => {
		const newId = generateNewId();
		const newUser = { ...userData, id: newId, role: "user", active: false };
		setUserDataBase((prevUsersDataBase) => [...prevUsersDataBase, newUser]);
		userLogin(userData);
	};

	// const userLogout = () => {
	// 	setUserDataBase(INITIAL_USER_STATE);
	// };

	return <UserContext value={{ usersDataBase, userCreate, userLogin, userValidate }}>{children}</UserContext>;
};
