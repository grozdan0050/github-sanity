import { defineField, defineType } from "sanity";
import { defaultLocaleId } from "../../../supportedLanguages";

export default defineType({
	name: "listItem",
	title: "List Item",
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
			subtitle: `body.${defaultLocaleId}.1.children.0.text`,
		},
	},
});
