import { defineField, defineType } from "sanity";

export default defineType({
	name: "heroWithForm",
	title: "Hero With Form",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "localeString",
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "richText",
		}),
		defineField({
			name: "listTitle",
			title: "List Title",
			type: "localeString",
		}),
		defineField({
			name: "listBody",
			title: "List Body",
			type: "array",
			of: [{ type: "reference", to: { type: "listItem" } }],
		}),
		defineField({
			name: "badgeBackgroundColor",
			title: "Badge Background Color",
			type: "color",
		}),
		defineField({
			name: "badgeIconColor",
			title: "Badge Icon Color",
			type: "color",
		}),
		defineField({
			name: "formTitle",
			title: "Form Title",
			type: "localeString",
		}),
		defineField({
			name: "formList",
			title: "Form List",
			type: "array",
			of: [{ type: "reference", to: { type: "listItem" } }],
		}),
		defineField({
			name: "formButtonText",
			title: "Form Button Text",
			type: "localeString",
		}),
		defineField({
			name: "formListBackgroundColor",
			title: "Form List Background Color",
			type: "color",
		}),
		defineField({
			name: "formListDotColor",
			title: "Form List Dot Color",
			type: "color",
		}),
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "color",
		}),
	],
});
