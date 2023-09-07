import { getClient } from "../lib/getClient";
import newsQuery from "../queries/newsQuery";

const getNews = (preview, locale) =>
	getClient(preview).fetch(newsQuery(!!locale), {
		locale: locale,
	});

export default getNews;
