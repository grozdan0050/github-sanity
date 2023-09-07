const supportedLanguages = [
	{ id: "en", flag: "🇬🇧", title: "English", isDefault: true },
	{ id: "nl", flag: "🇳🇱", title: "Netherlands" },
];

export const defaultLocale = supportedLanguages
	.filter(({ isDefault }) => isDefault)
	.at(0);

export const defaultLocaleId = defaultLocale.id;

export default supportedLanguages;
