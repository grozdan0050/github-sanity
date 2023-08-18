import { defineField, defineType } from "sanity";

export default defineType({
	name: "listTextWithTitle",
	title: "List Text With Title",
	type: "document",
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
});
