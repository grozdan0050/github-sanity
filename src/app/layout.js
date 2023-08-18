import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { PreloadResources } from "./preload-resources";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<PreloadResources />

			<body>{children}</body>
		</html>
	);
}
