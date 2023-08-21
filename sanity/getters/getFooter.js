import { getChachedClient } from "../lib/getClient";
import footerQuery from "../queries/footerQuery";

const getFooter = (preview, locale) =>
	getChachedClient(preview)(footerQuery, { locale: locale });

export default getFooter;
