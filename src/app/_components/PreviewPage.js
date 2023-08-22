"use client";

import pageQuery from "../../../sanity/queries/pageQuery";
import { useLiveQuery } from "@sanity/preview-kit";
import RenderPageTypes from "./RenderPageTypes";
import headerQuery from "../../../sanity/queries/headerQuery";
import Header from "./Header";
import settingsQuery from "../../../sanity/queries/settingsQuery";
import footerQuery from "../../../sanity/queries/footerQuery";
import Footer from "./Footer";

const PreviewPage = ({ page, header, settings, footer }) => {
	const [pageData] = useLiveQuery(page, pageQuery(page.uid));
	const [headerData] = useLiveQuery(header, headerQuery);
	const [settingsData] = useLiveQuery(settings, settingsQuery);
	const [footerData] = useLiveQuery(footer, footerQuery);

	return (
		<>
			<Header header={headerData} settings={settingsData} />

			<RenderPageTypes types={pageData.body} />

			<Footer footer={footerData} />

			<div className="fixed bottom-4 right-4 z-[100]">
				<a
					href="/api/exit-preview"
					className="px-8 py-6 bg-sky-400 inline-block font-semibold text-white text-xl"
				>
					Exit Preview
				</a>
			</div>
		</>
	);
};

export default PreviewPage;
