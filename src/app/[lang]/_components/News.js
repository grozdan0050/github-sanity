import Link from "next/link";
import { useEffect, useState } from "react";
import getNews from "../../../../sanity/getters/getNews";
import supportedLanguages from "../../../../supportedLanguages";

const News = ({ isAllNews, numberOfNews }) => {
	const [news, setNews] = useState();

	useEffect(() => {
		const fetchNews = async () => {
			const newsData = await getNews(undefined, false);
			setNews(isAllNews ? newsData : newsData.slice(0, numberOfNews));
		};

		fetchNews();
	}, [isAllNews, numberOfNews]);

	return (
		news &&
		supportedLanguages && (
			<ul className="p-1 border-[1px] border-[#ced2d9]">
				{news.map((item) => {
					const { _id, title, _type, publishDate } = item;

					return (
						_id && (
							<li
								key={_id}
								className="p-1 border-[1px] border-[transparent] hover:border-[#ced2d9]"
							>
								<div className="flex items-center gap-2">
									{(title || publishDate) && (
										<div className="hover:bg-[#f2f3f5] p-1 basis-full">
											{title && (
												<h5 className="font-medium text-[1rem] text-[#101112]">
													{supportedLanguages
														.map(({ id }) => {
															return id + ": " + title[id];
														})
														.join(" / ")}
												</h5>
											)}

											{publishDate && (
												<span className="text-[0.8125rem] text-[#6e7683]">
													{publishDate}
												</span>
											)}
										</div>
									)}

									{_type && _id && (
										<Link
											href={_type + ";" + _id}
											className="hover:bg-[#f2f3f5] p-1"
										>
											Edit
										</Link>
									)}
								</div>
							</li>
						)
					);
				})}
			</ul>
		)
	);
};

export default News;
