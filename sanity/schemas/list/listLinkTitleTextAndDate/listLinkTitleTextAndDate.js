import { defineField, defineType } from "sanity";

export default defineType({
	name: "listLinkTitleTextAndDate",
	title: "List Link Title Text And Date",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "localeString",
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
	preview: {
		select: {
			title: "title.en",
		},
	},
});
