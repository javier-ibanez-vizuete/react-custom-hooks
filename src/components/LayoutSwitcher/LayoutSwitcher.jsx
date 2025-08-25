import { useDevice } from "../../hooks/useDevice";
import { PokemonViewer } from "../PokemonViewer/PokemonViewer";
import "./LayoutSwitcher.css";

export const LayoutSwitcher = ({ children }) => {
	const { isMobile, isTablet, isDesktop } = useDevice();

	const responsiveStyle = () => {
		if (isMobile) return "isMobile";
		if (isTablet) return "isTablet";
		if (isDesktop) return "isDesktop";
		return "";
	};

	const currentDevice = responsiveStyle();

	return <div className={`layout-switcher ${currentDevice}`}>{children}</div>;
};
