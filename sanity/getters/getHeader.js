import { getChachedClient } from "../lib/getClient";
import headerQuery from "../queries/headerQuery";

const getHeader = (preview) => getChachedClient(preview)(headerQuery);

export default getHeader;
