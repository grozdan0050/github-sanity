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
	preview: {
		select: {
			title: "title.en",
			subtitle: "body.en.0.children",
		},
		prepare({ title, subtitle }) {
			const subtitleLength = subtitle.length;

			if (subtitleLength) {
				return {
					title,
					subtitle: subtitle[0].text,
				};
			}

			return {
				title,
			};
		},
	},
});
