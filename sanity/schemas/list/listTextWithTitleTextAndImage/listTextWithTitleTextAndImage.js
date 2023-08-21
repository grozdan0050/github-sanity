import { defineField, defineType } from "sanity";

export default defineType({
	name: "listTextWithTitleTextAndImage",
	title: "List Text With Title Text And Image",
	type: "document",
	fields: [
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
			name: "items",
			title: "Items",
			type: "array",
			of: [
				{
					type: "reference",
					to: { type: "listTextWithTitleTextAndImageItem" },
				},
			],
		}),
		defineField({
			name: "badgeBackgroundColor",
			title: "Badge Background Color",
			type: "color",
		}),
		defineField({
			name: "badgeIconColor",
			title: "Badge Icon Color",
			type: "color",
		}),
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
	],
});
