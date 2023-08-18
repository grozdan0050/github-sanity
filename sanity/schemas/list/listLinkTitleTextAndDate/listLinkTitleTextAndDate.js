import { defineField, defineType } from "sanity";

export default defineType({
	name: "listLinkTitleTextAndDate",
	title: "List Link Title Text And Date",
	type: "document",
	fields: [
		defineField({
			name: "items",
			title: "Items",
			type: "array",
			of: [
				{
					type: "reference",
					to: { type: "listLinkTitleTextAndDateItem" },
				},
			],
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
