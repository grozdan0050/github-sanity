import { defineType, defineField } from "sanity";
import { defaultLocaleId } from "../../../supportedLanguages";

export default defineType({
	name: "textWithTitleAndTable",
	title: "Text With Title And Table",
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
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
		defineField({
			name: "table",
			title: "Table",
			type: "table",
		}),
		defineField({
			name: "oddRowBackgroundColor",
			title: "Odd Row Background Color",
			type: "color",
		}),
		defineField({
			name: "evenRowBackgroundColor",
			title: "Even Row Background Color",
			type: "color",
		}),
	],
	preview: {
		select: {
			title: `title.${defaultLocaleId}`,
			subtitle: `body.${defaultLocaleId}.0.children.0.text`,
		},
	},
});
