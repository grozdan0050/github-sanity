import { getChachedClient } from "../lib/getClient";
import pagesQuery from "../queries/pagesQuery";

const getAllPages = (preview) => getChachedClient(preview)(pagesQuery);

export default getAllPages;
