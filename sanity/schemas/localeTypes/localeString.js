import { defineType } from "sanity";

const supportedLanguages = [
	{ id: "en", title: "English", isDefault: "true" },
	{ id: "es", title: "Spanish" },
];

export default defineType({
	name: "localeString",
	title: "Locale String",
	type: "object",
	fieldsets: [
		{
			name: "translations",
			title: "Translations",
			options: { collapsible: true },
		},
	],
	fields: supportedLanguages.map((lang) => ({
		name: lang.id,
		title: lang.title,
		type: "string",
		fieldset: lang.isDefault ? null : "translations",
	})),
});
