"use client";

import formatDate from "@/app/[lang]/helpers/formatDate";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import SanityNextImage from "../../SanityNextImage";

const ListLinkTitleTextDateAndImage = ({ data }) => {
	const { title, link, image, items, itemsBackgroundColor } = data;

	const main = title || items.length > 0 || (link.text && link.url);

	return (
		(main || image) && (
			<div className="flex flex-wrap py-32">
				{main && (
					<div className="w-1/2">
						<div className="w-max ml-auto mr-20">
							{title && <h2 className="text-5xl font-bold">{title}</h2>}

							{items.length > 0 && (
								<ul
									className="max-w-[37rem] relative before:absolute before:w-0.5 before:h-full before:bg-pink-300 before:right-full before:top-0 before:mr-10 [&>*+*]:mt-6 mt-14"
									style={{ "--items-bg-color": itemsBackgroundColor }}
								>
									{items.map((item, index) => {
										const { _id, publishDate, title, body, link } = item;

										return (
											(publishDate || title || body || link) &&
											_id && (
												<li
													key={_id + index}
													className="bg-[var(--items-bg-color)] rounded-3xl p-10 relative before:absolute before:w-4 before:aspect-square before:bg-pink-500 before:rounded-full before:top-[15%] before:right-full before:mr-[2.05rem]"
												>
													{publishDate && (
														<span>{formatDate(publishDate)}</span>
													)}

													{title && (
														<h3 className="mt-4 font-semibold text-lg">
															{title}
														</h3>
													)}

													{body && (
														<div className="mt-4 break-words">
															<PortableText value={body} />
														</div>
													)}

													{link?.text && link?.url && (
														<Link
															href={link.url}
															className="flex gap-4 items-center mt-4 text-pink-500"
														>
															<span className="font-semibold underline">
																{link.text}
															</span>

															<FontAwesomeIcon
																icon={faArrowUpRightFromSquare}
															/>
														</Link>
													)}
												</li>
											)
										);
									})}
								</ul>
							)}

							{link?.text && link?.url && (
								<Link
									href={link.url}
									className="inline-block mt-8 bg-white text-pink-500 border-2 border-pink-500 rounded-full px-6 py-3 text-lg font-semibold"
								>
									{link.text}
								</Link>
							)}
						</div>
					</div>
				)}

				{image && (
					<div className="w-1/2">
						<div className="flex items-center justify-start mt-24">
							<SanityNextImage data={image} />
						</div>
					</div>
				)}
			</div>
		)
	);
};

export default ListLinkTitleTextDateAndImage;
