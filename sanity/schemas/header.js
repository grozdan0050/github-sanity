import { defineType, defineField } from "sanity";
import { defaultLocaleId } from "../../supportedLanguages";

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
			of: [{ type: "reference", to: { type: "navigation" } }],
		}),
	],
	preview: {
		select: {
			title1: `navigation.0.linkText.${defaultLocaleId}`,
			title2: `navigation.1.linkText.${defaultLocaleId}`,
			title3: `navigation.2.linkText.${defaultLocaleId}`,
			title4: `navigation.3.linkText.${defaultLocaleId}`,
		},
		prepare({ title1, title2, title3, title4 }) {
			const title = [title1, title2, title3, title4]
				.filter((i) => i)
				.join(", ");

			return { title };
		},
	},
});
