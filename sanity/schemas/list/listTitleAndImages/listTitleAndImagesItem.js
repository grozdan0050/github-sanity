import { defineField, defineType } from "sanity";

export default defineType({
	name: "listTitleAndImagesItem",
	title: "List Title And Images Item",
	type: "object",
	fields: [
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			fields: [
				defineField({
					name: "alt",
					title: "Alt Text",
					type: "localeString",
				}),
			],
		}),
	],
});
