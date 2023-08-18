import { defineField, defineType } from "sanity";

export default defineType({
	name: "listInlineItem",
	title: "List Inline Item",
	type: "document",
	fields: [
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent",
		}),
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
	],
});
