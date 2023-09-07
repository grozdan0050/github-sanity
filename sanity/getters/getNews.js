import { getClient } from "../lib/getClient";
import newsQuery from "../queries/newsQuery";

const getNews = (preview, locale, isAllNews, numberOfNews) =>
	getClient(preview).fetch(newsQuery(!!locale, isAllNews, numberOfNews), {
		locale: locale,
	});

export default getNews;
