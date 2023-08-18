import { defineField, defineType } from "sanity";

export default defineType({
	name: "listLinkTitleTextDateAndImage",
	title: "List Link Title Text Date And Image",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "items",
			title: "Items",
			type: "array",
			of: [
				{
					type: "reference",
					to: { type: "listLinkTitleTextDateAndImageItem" },
				},
			],
		}),
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
		defineField({
			name: "image",
			title: "Image",
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
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
	],
});
