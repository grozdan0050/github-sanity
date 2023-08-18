import { defineField, defineType } from "sanity";

export default defineType({
	name: "richText",
	title: "Rich Text",
	type: "document",
	fields: [
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent",
		}),
	],
});
