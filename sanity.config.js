import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { table } from "@sanity/table";
import { schemaTypes } from "./sanity/schemas";
import { languageFilter } from "@sanity/language-filter";
import supportedLanguages from "./supportedLanguages";
import { defaultDocumentNode } from "./sanity/desk/defaultDocumentNode";

const config = defineConfig({
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_PROJECT_DATASET,
	title: "Aankoopclaim",
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
	basePath: "/admin",
	plugins: [
		deskTool({ defaultDocumentNode }),
		visionTool(),
		colorInput(),
		table(),
		languageFilter({
			supportedLanguages,
			defaultLanguages: supportedLanguages
				.map((lang) => lang.isDefault && lang.id)
				.filter((lang) => lang),
			documentTypes: schemaTypes.map((type) => type.name),
			filterField: (enclosingType, member, selectedLanguageIds) =>
				!enclosingType.name.startsWith("locale") ||
				selectedLanguageIds.includes(member.name),
		}),
	],
	schema: { types: schemaTypes },
});

export default config;
