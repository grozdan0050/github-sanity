import { defineField, defineType } from "sanity";

export default defineType({
	name: "listImageTextAndTitleItem",
	title: "List Image Text And Title Item",
	type: "object",
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
			name: "badgeIconColor",
			title: "Badge Icon Color",
			type: "color",
		}),
		defineField({
			name: "badgeBackgroundColor",
			title: "Badge Background Color",
			type: "color",
		}),
	],
});
