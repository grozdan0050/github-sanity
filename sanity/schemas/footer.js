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
});
