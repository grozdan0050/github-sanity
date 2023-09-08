"use client";

import { setCookie } from "cookies-next";
import supportedLanguages from "../../../../supportedLanguages";
import { useRouter, useParams } from "next/navigation";

const LanguageSwitcher = () => {
	const params = useParams();
	const { push } = useRouter();

	const handleChangeLocale = (e) => {
		const uid = params?.uid;

		const locale = e.target.getAttribute("name");

		setCookie("NEXT_LOCALE", locale, {
			maxAge: 60 * 60 * 24 * 365,
		});

		push(`/${locale}/${uid ?? ""}`);
	};

	const handleToggleDropdown = (e) => {
		const dropdown = e.target.nextSibling;

		dropdown.classList.toggle("translate-y-[6rem]");
		dropdown.classList.toggle("opacity-0");
	};

	return (
		params.lang &&
		supportedLanguages && (
			<div className="relative">
				<span
					className="cursor-pointer text-2xl inline-block ml-10"
					onClick={handleToggleDropdown}
				>
					{supportedLanguages.find(({ id }) => id === params.lang).flag}
				</span>

				<ul className="absolute top-full left-0 ml-5 mt-2 bg-slate-200 py-2 px-4 rounded-xl border-2 border-slate-400 [&>*+*]:mt-1 opacity-0 translate-y-[6rem] transition-all duration-300">
					{supportedLanguages.map((lang, index) => {
						const { id, flag } = lang;

						return (
							id &&
							flag && (
								<li
									className="cursor-pointer text-2xl"
									onClick={handleChangeLocale}
									key={id + index}
									name={id}
								>
									{flag}
								</li>
							)
						);
					})}
				</ul>
			</div>
		)
	);
};

export default LanguageSwitcher;
