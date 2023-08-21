import { getChachedClient } from "../lib/getClient";
import headerQuery from "../queries/headerQuery";

const getHeader = (preview, locale) =>
	getChachedClient(preview)(headerQuery, { locale: locale });

export default getHeader;
