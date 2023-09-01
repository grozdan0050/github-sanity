import { defineField, defineType } from "sanity";

export default defineType({
	name: "listTextWithTitle",
	title: "List Text With Title",
	type: "object",
	fields: [
		defineField({
			name: "items",
			title: "Items",
			type: "array",
			of: [{ type: "reference", to: { type: "listCollapsibleItem" } }],
		}),
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
	],
	preview: {
		select: {
			title: "items.0.title.en",
			subtitle: "items.0.body.en.0.children.0.text",
		},
	},
});
