import { defineField, defineType } from "sanity";

export default defineType({
	name: "link",
	title: "Link",
	type: "document",
	fields: [
		defineField({
			name: "linkText",
			title: "Link Text",
			type: "string",
		}),
		defineField({
			name: "linkUrl",
			title: "Link Url",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					allowRelative: true,
					scheme: ["http", "https"],
				}),
		}),
	],
});
