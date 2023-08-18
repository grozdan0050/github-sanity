import { defineField, defineType } from "sanity";

export default defineType({
	name: "page",
	title: "Page",
	type: "document",
	fields: [
		defineField({
			name: "uid",
			title: "Unique ID",
			type: "string",
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "array",
			of: [
				{ type: "defaultHero" },
				{ type: "animatedHero" },
				{ type: "heroWithForm" },
				{ type: "textWithTitle" },
				{ type: "listCollapsible" },
				{ type: "linkWithImage" },
				{ type: "listImageTextAndTitle" },
				{ type: "listLinkTitleTextDateAndImage" },
				{ type: "listCollapsibleWithTitleTextAndImage" },
				{ type: "listLinkTitleTextAndDate" },
				{ type: "listTextWithTitle" },
				{ type: "listInline" },
				{ type: "listTitleAndImages" },
				{ type: "listTextWithTitleTextAndImage" },
				{ type: "textWithTitleAndTable" },
			],
		}),
	],
});
