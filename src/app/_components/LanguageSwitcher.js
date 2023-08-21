"use client";

import supportedLanguages from "../../../supportedLanguages";
import { setCookie } from "cookies-next";

const LanguageSwitcher = () => {
	const handleChangeLocale = (e) => {
		setCookie("NEXT_LOCALE", e.target.innerText, {
			maxAge: 60 * 60 * 24 * 365,
		});

		location.reload();
	};

	return (
		<ul className="ml-10 [&>*+*]:mt-4">
			{supportedLanguages.map((lang, index) => (
				<li
					className="cursor:pointer px-2 py-1 bg-red-300"
					onClick={handleChangeLocale}
					key={lang.id + index}
				>
					{lang.id}
				</li>
			))}
		</ul>
	);
};

export default LanguageSwitcher;
