import algoliasearch from "algoliasearch/lite";
import { redirect } from "next/navigation";
import getNews from "../../../../../sanity/getters/getNews";

export async function GET(req, res) {
	const algoliaClient = algoliasearch(
		process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
		process.env.ALGOLIA_ADMIN_API_KEY
	);

	const index = algoliaClient.initIndex("news");

	const news = await getNews(null, null);

	const algoliaNews = news.map((newsItem) => {
		return {
			objectID: newsItem._id,
			title: newsItem.title,
			body: newsItem.body,
			link: newsItem.link,
			publishDate: newsItem.publishDate,
		};
	});

	const algoliaResponse = await index.saveObjects(algoliaNews);

	console.log(algoliaResponse);

	redirect(`/`);
}
