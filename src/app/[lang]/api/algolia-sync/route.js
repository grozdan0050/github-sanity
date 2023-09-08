import algoliasearch from "algoliasearch/lite";
import getNews from "../../../../../sanity/getters/getNews";

export default async function POST(req, res) {
	if (req.method === "POST") {
		const algoliaClient = algoliasearch(
			process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
			process.env.ALGOLIA_ADMIN_API_KEY
		);

		const index = algoliaClient.initIndex("news");

		const news = await getNews();

		const algoliaNews = news.map((newsItem) => {
			return {
				objectID: newsItem._id,
				title: newsItem.title,
				body: newsItem.body,
				link: newsItem.link,
				publishDate: newsItem.publishDate,
			};
		});

		await index.saveObjects(algoliaNews);

		res.json(`Content successfully synchronized with Algolia search`);
		res.end();
	}
}
