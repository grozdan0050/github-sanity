import { defineField, defineType } from "sanity";

export default defineType({
	name: "linkWithImage",
	title: "Link With Image",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "localeString",
		}),
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
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
	],
});
