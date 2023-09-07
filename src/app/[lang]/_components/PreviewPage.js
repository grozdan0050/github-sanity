"use client";

import { useLiveQuery } from "@sanity/preview-kit";
import RenderPageTypes from "./RenderPageTypes";
import Header from "./Header";
import Footer from "./Footer";
import settingsQuery from "../../../../sanity/queries/settingsQuery";
import footerQuery from "../../../../sanity/queries/footerQuery";
import pageQuery from "../../../../sanity/queries/pageQuery";
import headerQuery from "../../../../sanity/queries/headerQuery";

const PreviewPage = ({ page, header, settings, footer, locale }) => {
	const [pageData] = useLiveQuery(page, pageQuery(page?.uid), { locale });
	const [headerData] = useLiveQuery(header, headerQuery, { locale });
	const [settingsData] = useLiveQuery(settings, settingsQuery, { locale });
	const [footerData] = useLiveQuery(footer, footerQuery, { locale });

	return (
		<>
			{headerData && settingsData && (
				<Header header={headerData} settings={settingsData} />
			)}

			{pageData?.body && <RenderPageTypes types={pageData.body} />}

			{footerData && <Footer footer={footerData} />}

			<div className="fixed bottom-4 right-4 z-[100]">
				<a
					href={`/${locale}/api/exit-preview`}
					className="px-8 py-6 bg-sky-400 inline-block font-semibold text-white text-xl"
				>
					Exit Preview
				</a>
			</div>
		</>
	);
};

export default PreviewPage;
