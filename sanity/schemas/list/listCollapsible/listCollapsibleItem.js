import { defineField, defineType } from "sanity";

export default defineType({
	name: "listCollapsibleItem",
	title: "List Collapsible Item",
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
	],
});
