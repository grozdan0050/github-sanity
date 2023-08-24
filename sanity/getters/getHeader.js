import { getClient } from "../lib/getClient";
import headerQuery from "../queries/headerQuery";

const getHeader = (preview, locale) =>
	getClient(preview).fetch(headerQuery, { locale: locale });

export default getHeader;
