import { defineType, defineField } from "sanity";

export default defineType({
	name: "textWithTitleAndTable",
	title: "Text With Title And Table",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
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
});
