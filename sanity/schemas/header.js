import { defineType, defineField } from "sanity";

export default defineType({
	name: "header",
	title: "Header",
	type: "document",
	fields: [
		defineField({
			name: "logo",
			title: "Logo",
			type: "image",
			fields: [
				defineField({
					name: "alt",
					title: "Alt Text",
					type: "string",
				}),
			],
		}),
		defineField({
			name: "navigation",
			title: "Navigation",
			type: "array",
			of: [{ type: "link" }],
		}),
	],
});
