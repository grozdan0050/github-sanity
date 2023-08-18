import { defineField, defineType } from "sanity";

export default defineType({
	name: "heroWithForm",
	title: "Hero With Form",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent",
		}),
		defineField({
			name: "listTitle",
			title: "List Title",
			type: "string",
		}),
		defineField({
			name: "listBody",
			title: "List Body",
			type: "array",
			of: [{ type: "reference", to: { type: "text" } }],
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
			type: "string",
		}),
		defineField({
			name: "formList",
			title: "Form List",
			type: "array",
			of: [{ type: "reference", to: { type: "text" } }],
		}),
		defineField({
			name: "formButtonText",
			title: "Form Button Text",
			type: "string",
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
