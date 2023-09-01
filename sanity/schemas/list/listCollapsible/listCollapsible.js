import { defineField, defineType } from "sanity";

export default defineType({
	name: "listCollapsible",
	title: "List Collapsible",
	type: "object",
	fields: [
		defineField({
			name: "items",
			title: "Items",
			type: "array",
			of: [{ type: "reference", to: { type: "listCollapsibleItem" } }],
		}),
		defineField({
			name: "itemsBackgroundColor",
			title: "Items Background Color",
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
			title1: "items.0.title.en",
			title2: "items.1.title.en",
			title3: "items.2.title.en",
			subtitle1: "items.0.body.en.0.children.0.text",
			subtitle2: "items.1.body.en.0.children.0.text",
			subtitle3: "items.2.body.en.0.children.0.text",
		},
		prepare(selected) {
			const { title1, title2, title3 } = selected;

			const title = [title1, title2, title3]
				.map((item) => item.slice(0, 15) + "...")
				.join(", ");

			const { subtitle1, subtitle2, subtitle3 } = selected;

			const subtitle = [subtitle1, subtitle2, subtitle3]
				.map((item) => item.slice(0, 15) + "...")
				.join(", ");

			return {
				title,
				subtitle,
			};
		},
	},
});
