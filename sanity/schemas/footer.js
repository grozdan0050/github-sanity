import { defineType, defineField } from "sanity";

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
			of: [{ type: "link" }],
		}),
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
	],
	preview: {
		select: {
			title1: "navigation.0.linkText.en",
			title2: "navigation.1.linkText.en",
			title3: "navigation.2.linkText.en",
			title4: "navigation.3.linkText.en",
			subtitle: "copyright.en",
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
