import { defineField, defineType } from "sanity";

export default defineType({
	name: "listCollapsibleItem",
	title: "List Collapsible Item",
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
			type: "richText",
		}),
	],
});
