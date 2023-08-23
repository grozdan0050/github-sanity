import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { cookies, headers as getHeaders } from "next/headers";
import supportedLanguages from "../../../../supportedLanguages";

const getLocale = (cookie, header) => {
	const locales = supportedLanguages.map((language) => language.id);
	const locale = cookie ?? cookies().get("NEXT_LOCALE")?.value;

	if (locale && locales.includes(locale)) {
		return locale;
	}

	const defaultLocale = supportedLanguages
		.map((language) => language.isDefault && language.id)
		.filter((language) => language);

	const languageHeader = header ?? getHeaders().get("accept-language");
	const languages = new Negotiator({
		headers: { "accept-language": languageHeader },
	}).languages();

	const preferredLocale = match(languages, locales, defaultLocale);

	return preferredLocale;
};

export default getLocale;
