import { defineField, defineType } from "sanity";

export default defineType({
	name: "listInlineItem",
	title: "List Inline Item",
	type: "object",
	fields: [
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
});
