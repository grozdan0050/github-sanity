import { getChachedClient } from "../lib/getClient";
import footerQuery from "../queries/footerQuery";

const getFooter = (preview) => getChachedClient(preview)(footerQuery);

export default getFooter;
