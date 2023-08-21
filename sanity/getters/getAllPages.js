import { getChachedClient } from "../lib/getClient";
import pagesQuery from "../queries/pagesQuery";

const getAllPages = (preview, locale) =>
	getChachedClient(preview)(pagesQuery, { locale: locale });

export default getAllPages;
