import { defineField, defineType } from "sanity";
import { defaultLocaleId } from "../../../../supportedLanguages";

export default defineType({
	name: "listLinkTitleTextDateAndImage",
	title: "List Link Title Text Date And Image",
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
		defineField({
			name: "itemsBackgroundColor",
			title: "Items Background Color",
			type: "color",
		}),
	],
	preview: {
		select: {
			title: `title.${defaultLocaleId}`,
			subtitle: `linkText.${defaultLocaleId}`,
		},
	},
});
