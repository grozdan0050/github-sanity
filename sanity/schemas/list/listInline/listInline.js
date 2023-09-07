import { defineField, defineType } from "sanity";
import { defaultLocaleId } from "../../../../supportedLanguages";

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
	preview: {
		select: {
			item1: `items.0.body.${defaultLocaleId}.0.children`,
			item2: `items.1.body.${defaultLocaleId}.0.children`,
			item3: `items.2.body.${defaultLocaleId}.0.children`,
		},
		prepare({ item1, item2, item3 }) {
			const items = [item1, item2, item3].map((item) => {
				const itemLength = item.length;

				if (itemLength) {
					return item[0].text;
				}
			});

			if (items.length > 1) {
				const title = items.slice(0, -1).join(", ");
				const subtitle = items.slice(-1).join(", ");

				return {
					title,
					subtitle,
				};
			}

			if (items.length) {
				return {
					title: items[0].join(", "),
				};
			}

			return { title: "Element is empty!" };
		},
	},
});
