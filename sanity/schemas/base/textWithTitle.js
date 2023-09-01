import { defineType, defineField } from "sanity";

export default defineType({
	name: "textWithTitle",
	title: "Text With Title",
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
	],
	preview: {
		select: {
			title: "title.en",
			subtitle: "body.en.0.children.0.text",
		},
	},
});
