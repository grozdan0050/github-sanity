import { getChachedClient } from "../lib/getClient";
import pageQuery from "../queries/pageQuery";

const getPageByUid = (preview, uid) =>
	getChachedClient(preview)(pageQuery(uid));

export default getPageByUid;
