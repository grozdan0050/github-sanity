"use client";

import ReactDOM from "react-dom";

export const PreloadResources = () => {
	ReactDOM.preconnect("https://fonts.googleapis.com");
	ReactDOM.preconnect("https://fonts.gstatic.com", { crossOrigin: "" });

	return null;
};
