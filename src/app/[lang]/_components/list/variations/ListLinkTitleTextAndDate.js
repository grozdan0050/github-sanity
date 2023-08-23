"use client";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { redirect, useParams, useSearchParams } from "next/navigation";
import Paginator from "../../paginator/Paginator";
import formatDate from "@/app/[lang]/helpers/formatDate";

const ListLinkTitleTextAndDate = ({ data }) => {
	const { itemsBackgroundColor, items } = data;

	const basePath = useParams().uid;

	const page = useSearchParams().get("page");

	const [currentPageIndex, setCurrentPageIndex] = useState(1);
	const [shouldScroll, setShouldScroll] = useState(false);

	const NUMBER_OF_ITEMS_PER_PAGE = 9;
	const numberOfPages = Math.ceil(items.length / NUMBER_OF_ITEMS_PER_PAGE);

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
			return items;
		}

		return items.slice(firstPageItemIndex, lastPageItemIndex);
	};

	const scrollToTopOfNewsList = () => {
		const topOfTheElement = newsListRef.current.offsetTop - 100;

		window.scrollTo({ top: topOfTheElement, behavior: "smooth" });
	};

	return (
		<div className="shell-md py-28" ref={newsListRef}>
			<ul
				className="grid grid-cols-3 gap-4"
				style={{ "--items-bg-color": itemsBackgroundColor }}
			>
				{getPageItems().map((item, index) => (
					<li
						key={item._id + index}
						style={{ "--item-bg-color": item.backgroundColor }}
						className="bg-[var(--items-bg-color)] rounded-3xl p-10"
					>
						<span>{formatDate(item.publishDate)}</span>

						<h4 className="mt-4 font-semibold text-xl">{item.title}</h4>

						{item.body && (
							<div className="mt-4">
								<PortableText value={item.body} />
							</div>
						)}

						<Link
							href={item.link.url}
							className="flex gap-4 items-center mt-4 text-pink-500"
						>
							<span className="font-semibold underline">{item.link.text}</span>

							<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</Link>
					</li>
				))}
			</ul>

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
