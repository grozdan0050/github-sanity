import { defineType, defineField } from "sanity";

export default defineType({
	name: "textWithTitle",
	title: "Text With Title",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "localeString",
		}),
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
