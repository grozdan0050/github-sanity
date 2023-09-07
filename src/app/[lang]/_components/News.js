import Link from "next/link";
import { useEffect, useState } from "react";
import getNews from "../../../../sanity/getters/getNews";
import supportedLanguages from "../../../../supportedLanguages";

const News = ({ isAllNews, numberOfNews }) => {
	const [news, setNews] = useState();

	useEffect(() => {
		const fetchNews = async () => {
			setNews(await getNews(null, false, isAllNews, numberOfNews));
		};

		fetchNews();
	}, [isAllNews, numberOfNews]);

	return (
		news && (
			<ul className="p-1 border-[1px] border-[#ced2d9]">
				{news.map((item) => {
					return (
						<li
							key={item._id}
							className="p-1 border-[1px] border-[transparent] hover:border-[#ced2d9]"
						>
							<div className="flex items-center gap-2">
								<div className="hover:bg-[#f2f3f5] p-1 basis-full">
									<h5 className="font-medium text-[1rem] text-[#101112]">
										{supportedLanguages
											.map(({ id }) => {
												return id + ": " + item.title[id];
											})
											.join(" / ")}
									</h5>

									<span className="text-[0.8125rem] text-[#6e7683]">
										{item.publishDate}
									</span>
								</div>

								<Link
									href={item._type + ";" + item._id}
									className="hover:bg-[#f2f3f5] p-1"
								>
									Edit
								</Link>
							</div>
						</li>
					);
				})}
			</ul>
		)
	);
};

export default News;
