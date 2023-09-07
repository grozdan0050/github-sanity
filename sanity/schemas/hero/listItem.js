import { defineField, defineType } from "sanity";

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
			title: "body.en.0.children.0.text",
			subtitle: "body.en.1.children.0.text",
		},
	},
});
