import { defineField, defineType } from "sanity";

export default defineType({
	name: "link",
	title: "Link",
	type: "object",
	fields: [
		defineField({
			name: "linkText",
			title: "Link Text",
			type: "localeString",
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
