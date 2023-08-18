import formatDate from "@/helpers/formatDate";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortableText } from "@portabletext/react";
import SanityNextImage from "@/app/_components/SanityNextImage";
import Link from "next/link";

const ListLinkTitleTextDateAndImage = ({ data }) => {
	const { title, items, link, image } = data;

	return (
		<div className="flex flex-wrap py-32">
			<div className="w-1/2">
				<div className="w-max ml-auto mr-20">
					<h2 className="text-5xl font-bold">{title}</h2>

					<ul className="max-w-[37rem] relative before:absolute before:w-0.5 before:h-full before:bg-pink-300 before:right-full before:top-0 before:mr-10 [&>*+*]:mt-6 mt-14">
						{items.map((item, index) => (
							<li
								key={item._id + index}
								style={{ "--item-bg-color": item.backgroundColor }}
								className="bg-[var(--item-bg-color)] rounded-3xl p-10 relative before:absolute before:w-4 before:aspect-square before:bg-pink-500 before:rounded-full before:top-[15%] before:right-full before:mr-[2.05rem]"
							>
								<span>{formatDate(item.publishDate)}</span>

								<h3 className="mt-4 font-semibold text-lg">{item.title}</h3>

								{item.body && (
									<div className="mt-4">
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

					<Link
						href={link.url}
						className="inline-block mt-8 bg-white text-pink-500 border-2 border-pink-500 rounded-full px-6 py-3 text-lg font-semibold"
					>
						{link.text}
					</Link>
				</div>
			</div>

			<div className="w-1/2">
				<div className="flex items-center justify-start mt-24">
					<SanityNextImage data={image} />
				</div>
			</div>
		</div>
	);
};

export default ListLinkTitleTextDateAndImage;
