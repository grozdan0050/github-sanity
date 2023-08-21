"use client";

import supportedLanguages from "../../../supportedLanguages";
import { setCookie } from "cookies-next";

const LanguageSwitcher = () => {
	const handleChangeLocale = (e) => {
		setCookie("NEXT_LOCALE", e.target.getAttribute("name"), {
			maxAge: 60 * 60 * 24 * 365,
		});

		location.reload();
	};

	return (
		<ul className="ml-10 [&>*+*]:mt-2">
			{supportedLanguages.map((lang, index) => (
				<li
					className="cursor-pointer text-2xl"
					onClick={handleChangeLocale}
					key={lang.id + index}
					name={lang.id}
				>
					{lang.flag}
				</li>
			))}
		</ul>
	);
};

export default LanguageSwitcher;
