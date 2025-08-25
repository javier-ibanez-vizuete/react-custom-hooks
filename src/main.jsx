import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<LanguageProvider>
			<UserProvider>
				<App />
			</UserProvider>
		</LanguageProvider>
	</StrictMode>
);
