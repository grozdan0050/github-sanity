import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import RenderPageTypes from "@/app/_components/RenderPageTypes";
import { draftMode } from "next/headers";
import getFooter from "../../sanity/getters/getFooter";
import getHeader from "../../sanity/getters/getHeader";
import getPageByUid from "../../sanity/getters/getPageByUid";
import getSettings from "../../sanity/getters/getSettings";
import PreviewPage from "./_components/PreviewPage";
import PreviewProvider from "./_components/PreviewProvider";
import getLocale from "@/helpers/getLocale";

export async function generateMetadata() {
	const locale = getLocale();

	const title = (await getPageByUid(undefined, "home", locale)).title;

	return {
		title: title + " | Aankoopclaim",
	};
}

export default async function Home() {
	const locale = getLocale();

	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_READ_TOKEN }
		: undefined;

	const page = await getPageByUid(preview, "home", locale);
	const header = await getHeader(preview, locale);
	const settings = await getSettings(preview, locale);
	const footer = await getFooter(preview, locale);

	const headerAndHeroBackgroundColor = page.body[0].backgroundColor;

	if (preview && preview.token) {
		return (
			<div
				className="grid h-full grid-rows-[auto_1fr_auto] font-[poppins] text-[var(--text-color)]"
				style={{
					"--bg-color": headerAndHeroBackgroundColor ?? "#ffffff",
				}}
			>
				<PreviewProvider token={preview.token}>
					<PreviewPage
						page={page}
						header={header}
						settings={settings}
						footer={footer}
					/>
				</PreviewProvider>
			</div>
		);
	}

	return (
		<div
			className="grid h-full grid-rows-[auto_1fr_auto] font-[poppins] text-[var(--text-color)]"
			style={{
				"--bg-color": headerAndHeroBackgroundColor ?? "#ffffff",
			}}
		>
			<Header header={header} settings={settings} />

			<RenderPageTypes types={page.body} />

			<Footer footer={footer} />
		</div>
	);
}
