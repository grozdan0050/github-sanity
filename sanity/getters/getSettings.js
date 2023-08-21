import { getChachedClient } from "../lib/getClient";
import settingsQuery from "../queries/settingsQuery";

const getSettings = (preview, locale) =>
	getChachedClient(preview)(settingsQuery, { locale: locale });

export default getSettings;
