import { defineField, defineType } from "sanity";

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
			title: "title.en",
			subtitle: "body.en.0.children.0.text",
		},
	},
});
