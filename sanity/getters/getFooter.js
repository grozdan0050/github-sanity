import { getClient } from "../lib/getClient";
import footerQuery from "../queries/footerQuery";

const getFooter = (preview, locale) =>
	getClient(preview).fetch(footerQuery, { locale: locale });

export default getFooter;
