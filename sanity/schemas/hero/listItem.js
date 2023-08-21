import { defineField, defineType } from "sanity";

export default defineType({
	name: "listItem",
	title: "List Item",
	type: "document",
	fields: [
		defineField({
			name: "body",
			title: "Body",
			type: "richText",
		}),
	],
});
