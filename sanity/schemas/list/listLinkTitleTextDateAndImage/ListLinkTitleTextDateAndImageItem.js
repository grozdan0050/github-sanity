import { defineField, defineType } from "sanity";

export default defineType({
	name: "listLinkTitleTextDateAndImageItem",
	title: "List Link Title Text Date And Image Item",
	type: "document",
	fields: [
		defineField({
			name: "publishDate",
			title: "Publish Date",
			type: "date",
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "localeString",
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent",
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
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
	],
});
