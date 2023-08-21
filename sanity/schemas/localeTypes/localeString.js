import { defineType } from "sanity";
import supportedLanguages from "../../../supportedLanguages";

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
