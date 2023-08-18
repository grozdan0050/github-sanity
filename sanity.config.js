import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { table } from "@sanity/table";
import { schemaTypes } from "./sanity/schemas";

const config = defineConfig({
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_PROJECT_DATASET,
	title: "Aankoopclaim",
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
	basePath: "/admin",
	plugins: [deskTool(), visionTool(), colorInput(), table()],
	schema: { types: schemaTypes },
});

export default config;
