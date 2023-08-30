import { defineField, defineType } from "sanity";

export default defineType({
	name: "listInline",
	title: "List Inline",
	type: "object",
	fields: [
		defineField({
			name: "items",
			title: "Items",
			type: "array",
			of: [{ type: "reference", to: { type: "listInlineItem" } }],
		}),
		defineField({
			name: "itemsBadgeEnabled",
			title: "Items Badge Enabled",
			type: "boolean",
		}),
		defineField({
			name: "itemsBadgeBackgroundColor",
			title: "Items Badge Background Color",
			type: "color",
		}),
		defineField({
			name: "itemsBadgeIconColor",
			title: "Items Badge Icon Color",
			type: "color",
		}),
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
	],
});
