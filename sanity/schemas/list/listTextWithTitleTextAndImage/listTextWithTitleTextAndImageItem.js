import { defineField, defineType } from "sanity";

export default defineType({
	name: "listTextWithTitleTextAndImageItem",
	title: "List Text With Title Text And Image Item",
	type: "object",
	fields: [
		defineField({
			name: "body",
			title: "Body",
			type: "richText",
		}),
	],
});
