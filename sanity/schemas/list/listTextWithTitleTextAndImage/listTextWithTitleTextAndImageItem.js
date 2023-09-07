import { defineField, defineType } from "sanity";
import { defaultLocaleId } from "../../../../supportedLanguages";

export default defineType({
	name: "listTextWithTitleTextAndImageItem",
	title: "List Text With Title Text And Image Item",
	type: "object",
	fields: [
		defineField({
			name: "body",
			title: "Body",
			type: "richText",
		}),
	],
	preview: {
		select: {
			title: `body.${defaultLocaleId}.0.children.0.text`,
		},
	},
});
