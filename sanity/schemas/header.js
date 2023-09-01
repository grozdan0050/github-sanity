import { defineType, defineField } from "sanity";

export default defineType({
	name: "header",
	title: "Header",
	type: "document",
	fields: [
		defineField({
			name: "logo",
			title: "Logo",
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
			name: "navigation",
			title: "Navigation",
			type: "array",
			of: [{ type: "link" }],
		}),
	],
	preview: {
		select: {
			title1: "navigation.0.linkText.en",
			title2: "navigation.1.linkText.en",
			title3: "navigation.2.linkText.en",
			title4: "navigation.3.linkText.en",
		},
		prepare({ title1, title2, title3, title4 }) {
			const title = [title1, title2, title3, title4]
				.filter((i) => i)
				.join(", ");

			return { title };
		},
	},
});
