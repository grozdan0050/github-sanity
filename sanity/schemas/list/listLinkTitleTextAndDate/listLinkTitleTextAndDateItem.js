import { defineField, defineType } from "sanity";

export default defineType({
	name: "listLinkTitleTextAndDateItem",
	title: "List Link Title Text And Date Item",
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
			type: "string",
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent",
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
	],
});
