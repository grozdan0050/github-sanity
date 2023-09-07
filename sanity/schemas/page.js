import News from "@/app/[lang]/_components/News";
import { defineField, defineType } from "sanity";
import { defaultLocaleId } from "../../supportedLanguages";

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
			type: "localeString",
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
		defineField({
			name: "news",
			title: "News",
			type: "array",
			of: [{ type: "reference", to: { type: "news" } }],
			components: {
				input: () => News({ isAllNews: true }),
			},
			hidden: ({ parent: { uid } }) => {
				return uid !== "press";
			},
		}),
		defineField({
			name: "latestNews",
			title: "Latest News",
			type: "array",
			of: [{ type: "reference", to: { type: "news" } }],
			components: {
				input: () => News({ isAllNews: false, numberOfNews: 3 }),
			},
			hidden: ({ parent: { uid } }) => {
				return uid !== "home";
			},
		}),
	],
	preview: {
		select: {
			title: "uid",
			subtitle: `title.${defaultLocaleId}`,
		},
		prepare({ title, subtitle }) {
			return {
				title: title.charAt(0).toUpperCase() + title.slice(1),
				subtitle,
			};
		},
	},
});
