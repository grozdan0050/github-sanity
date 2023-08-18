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
					type: "string",
				}),
			],
		}),
		defineField({
			name: "body",
			title: "body",
			type: "blockContent",
		}),
		defineField({
			name: "chamberOfCommerceNumber",
			title: "Chamber Of Commerce Number",
			type: "string",
		}),
		defineField({
			name: "copyright",
			title: "Copyright",
			type: "string",
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
