import { getClient } from "../lib/getClient";
import settingsQuery from "../queries/settingsQuery";

const getSettings = (preview, locale) =>
	getClient(preview).fetch(settingsQuery, { locale: locale });

export default getSettings;
