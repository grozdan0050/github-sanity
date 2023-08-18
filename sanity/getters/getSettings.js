import { getChachedClient } from "../lib/getClient";
import settingsQuery from "../queries/settingsQuery";

const getSettings = (preview) => getChachedClient(preview)(settingsQuery);

export default getSettings;
