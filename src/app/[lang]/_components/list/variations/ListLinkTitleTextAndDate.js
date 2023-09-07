"use client";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { redirect, useParams, useSearchParams } from "next/navigation";
import Paginator from "../../paginator/Paginator";
import formatDate from "@/app/[lang]/helpers/formatDate";
import getNews from "../../../../../../sanity/getters/getNews";

const ListLinkTitleTextAndDate = ({ data: { itemsBackgroundColor } }) => {
	const basePath = useParams().uid;
	const locale = useParams().lang;

	const page = useSearchParams().get("page");

	const [currentPageIndex, setCurrentPageIndex] = useState(1);
	const [shouldScroll, setShouldScroll] = useState(false);
	const [news, setNews] = useState();

	useEffect(() => {
		const fetchNews = async () => {
			setNews(await getNews(null, locale, true));
		};

		fetchNews();
	}, [locale]);

	const NUMBER_OF_ITEMS_PER_PAGE = 9;
	const numberOfPages =
		news?.length && Math.ceil(news.length / NUMBER_OF_ITEMS_PER_PAGE);

	const firstPageItemIndex = (currentPageIndex - 1) * NUMBER_OF_ITEMS_PER_PAGE;
	const lastPageItemIndex = firstPageItemIndex + NUMBER_OF_ITEMS_PER_PAGE;

	const isPaginatorVisible = numberOfPages > 1;

	const newsListRef = useRef();

	useEffect(() => {
		if (page?.length) {
			if (page <= numberOfPages && page > 0) {
				setCurrentPageIndex(page);

				scrollToTopOfNewsList();
			} else {
				redirect("/" + basePath);
			}
		}
	}, [numberOfPages, page, basePath]);

	useEffect(() => {
		if (shouldScroll) {
			scrollToTopOfNewsList();

			setShouldScroll(false);
		}
	}, [shouldScroll]);

	const getPageItems = () => {
		if (numberOfPages === 1) {
			return news;
		}

		return news?.length && news.slice(firstPageItemIndex, lastPageItemIndex);
	};

	const scrollToTopOfNewsList = () => {
		const topOfTheElement = newsListRef.current.offsetTop - 100;

		window.scrollTo({ top: topOfTheElement, behavior: "smooth" });
	};

	return (
		<div className="shell-md py-28" ref={newsListRef}>
			{news && (
				<ul
					className="grid grid-cols-3 gap-4"
					style={{ "--news-bg-color": itemsBackgroundColor }}
				>
					{getPageItems().map((item, index) => (
						<li
							key={item._id + index}
							style={{ "--item-bg-color": item.backgroundColor }}
							className="bg-[var(--news-bg-color)] rounded-3xl p-10"
						>
							<span>{formatDate(item.publishDate)}</span>

							<h4 className="mt-4 font-semibold text-xl">{item.title}</h4>

							{item.body && (
								<div className="mt-4 break-all">
									<PortableText value={item.body} />
								</div>
							)}

							<Link
								href={item.link.url}
								className="flex gap-4 items-center mt-4 text-pink-500"
							>
								<span className="font-semibold underline">
									{item.link.text}
								</span>

								<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
							</Link>
						</li>
					))}
				</ul>
			)}

			{isPaginatorVisible && (
				<Paginator
					className="mt-10 lg:mt-20"
					currentPageIndex={currentPageIndex}
					numberOfPages={numberOfPages}
				/>
			)}
		</div>
	);
};

export default ListLinkTitleTextAndDate;
