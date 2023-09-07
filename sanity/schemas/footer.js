import { defineType, defineField } from "sanity";
import { defaultLocaleId } from "../../supportedLanguages";

export default defineType({
	name: "footer",
	title: "Footer",
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
			name: "body",
			title: "body",
			type: "richText",
		}),
		defineField({
			name: "chamberOfCommerceNumber",
			title: "Chamber Of Commerce Number",
			type: "localeString",
		}),
		defineField({
			name: "copyright",
			title: "Copyright",
			type: "localeString",
		}),
		defineField({
			name: "navigation",
			title: "Navigation",
			type: "array",
			of: [{ type: "reference", to: { type: "navigation" } }],
		}),
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
	],
	preview: {
		select: {
			title1: `navigation.0.linkText.${defaultLocaleId}`,
			title2: `navigation.1.linkText.${defaultLocaleId}`,
			title3: `navigation.2.linkText.${defaultLocaleId}`,
			title4: `navigation.3.linkText.${defaultLocaleId}`,
			subtitle: `copyright.${defaultLocaleId}`,
			media: "logo",
		},
		prepare({ title1, title2, title3, title4, subtitle, media }) {
			const title = [title1, title2, title3, title4]
				.filter((i) => i)
				.join(", ");

			return { title, subtitle, media };
		},
	},
});
