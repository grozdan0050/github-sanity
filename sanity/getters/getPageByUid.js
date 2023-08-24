import { getClient } from "../lib/getClient";
import pageQuery from "../queries/pageQuery";

const getPageByUid = (preview, uid, locale) =>
	getClient(preview).fetch(pageQuery(uid), { locale: locale });

export default getPageByUid;
