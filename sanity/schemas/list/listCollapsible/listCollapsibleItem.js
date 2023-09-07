import { defineField, defineType } from "sanity";
import { defaultLocaleId } from "../../../../supportedLanguages";

export default defineType({
	name: "listCollapsibleItem",
	title: "List Collapsible Item",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "localeString",
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "richText",
		}),
	],
	preview: {
		select: {
			title: `title.${defaultLocaleId}`,
			subtitle: `body.${defaultLocaleId}.0.children.0.text`,
		},
	},
});
