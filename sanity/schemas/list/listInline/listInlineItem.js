import { defineField, defineType } from "sanity";

export default defineType({
	name: "listInlineItem",
	title: "List Inline Item",
	type: "object",
	fields: [
		defineField({
			name: "body",
			title: "Body",
			type: "richText",
		}),
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
	],
	preview: {
		select: {
			title: "body.en",
		},
		prepare({ title }) {
			const numberOfChildren = title[0].children.length;

			if (numberOfChildren > 1) {
				return {
					title: title[0].children[0].text,
					subtitle: title[0].children[1].text,
				};
			}

			if (numberOfChildren) {
				return {
					title: title[0].children[0].text,
				};
			}

			return {
				title: "Element is empty!",
			};
		},
	},
});
