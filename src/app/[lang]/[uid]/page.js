import { draftMode } from "next/headers";
import getFooter from "../../../../sanity/getters/getFooter";
import getHeader from "../../../../sanity/getters/getHeader";
import getNews from "../../../../sanity/getters/getNews";
import getPageByUid from "../../../../sanity/getters/getPageByUid";
import getSettings from "../../../../sanity/getters/getSettings";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import PreviewPage from "../_components/PreviewPage";
import PreviewProvider from "../_components/PreviewProvider";
import RenderPageTypes from "../_components/RenderPageTypes";

export async function generateMetadata({ params }) {
	const locale = params.lang;

	const title = (await getPageByUid(undefined, params.uid, locale))?.title;

	return {
		title: title + " | Aankoopclaim",
	};
}

export default async function Page({ params }) {
	const locale = params.lang;

	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_READ_TOKEN }
		: undefined;

	const page = await getPageByUid(preview, params.uid, locale);
	const header = await getHeader(preview, locale);
	const settings = await getSettings(preview, locale);
	const footer = await getFooter(preview, locale);
	const news = await getNews(preview, locale);

	const headerAndHeroBackgroundColor = page?.body[0].backgroundColor;

	return (
		<div
			className="grid h-full grid-rows-[auto_1fr_auto] font-[poppins] text-[var(--text-color)]"
			style={{
				"--bg-color": headerAndHeroBackgroundColor ?? "#ffffff",
			}}
		>
			{preview?.token && (
				<PreviewProvider token={preview.token}>
					<PreviewPage
						page={page}
						header={header}
						settings={settings}
						footer={footer}
						news={news}
						locale={locale}
					/>
				</PreviewProvider>
			)}

			{!preview?.token && (
				<>
					<Header header={header} settings={settings} />

					<RenderPageTypes types={page?.body} news={news} />

					<Footer footer={footer} />
				</>
			)}
		</div>
	);
}
