import { defineField, defineType } from "sanity";
import { defaultLocaleId } from "../../../../supportedLanguages";

export default defineType({
	name: "listImageTextAndTitle",
	title: "List Image Text And Title",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "localeString",
		}),
		defineField({
			name: "items",
			title: "Items",
			type: "array",
			of: [{ type: "reference", to: { type: "listImageTextAndTitleItem" } }],
		}),
		defineField({
			name: "itemsBadgeEnabled",
			title: "Items Badge Enabled",
			type: "boolean",
		}),
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
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
		select: {
			title: `title.${defaultLocaleId}`,
			subtitle: `linkText.${defaultLocaleId}`,
		},
	},
});
