import { defineField, defineType } from "sanity";

export default defineType({
	name: "listCollapsible",
	title: "List Collapsible",
	type: "object",
	fields: [
		defineField({
			name: "items",
			title: "Items",
			type: "array",
			of: [{ type: "reference", to: { type: "listCollapsibleItem" } }],
		}),
		defineField({
			name: "itemsBackgroundColor",
			title: "Items Background Color",
			type: "color",
		}),
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
	],
});
