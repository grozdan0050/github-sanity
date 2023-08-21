import { defineType } from "sanity";
import supportedLanguages from "../../../supportedLanguages";

export default defineType({
	name: "richText",
	title: "Rich Text",
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
		type: "blockContent",
		fieldset: lang.isDefault ? null : "translations",
	})),
});
