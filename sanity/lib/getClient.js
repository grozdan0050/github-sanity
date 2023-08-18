import { createClient } from "next-sanity";
import { cache } from "react";

export const getClient = (preview) => {
	const client = createClient({
		projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
		dataset: process.env.NEXT_PUBLIC_PROJECT_DATASET,
		apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
		useCdn: false,
		perspective: "published",
	});

	if (preview) {
		if (!preview.token) {
			throw new Error("You must provide a token to preview drafts");
		}

		return client.withConfig({
			token: preview.token,
			ignoreBrowserTokenWarning: true,
			perspective: "previewDrafts",
		});
	}

	return client;
};

export const getChachedClient = (preview) => {
	const client = getClient(preview);

	return cache(client.fetch.bind(client));
};
