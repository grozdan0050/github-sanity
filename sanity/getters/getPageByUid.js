import { getChachedClient } from "../lib/getClient";
import pageQuery from "../queries/pageQuery";

const getPageByUid = (preview, uid, locale) =>
	getChachedClient(preview)(pageQuery(uid), { locale: locale });

export default getPageByUid;
