import { defineField, defineType } from "sanity";
import { defaultLocaleId } from "../../supportedLanguages";

export default defineType({
	name: "news",
	title: "News",
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
			type: "richText",
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
	],
	preview: {
		select: { title: `title.${defaultLocaleId}`, subtitle: "publishDate" },
	},
});
