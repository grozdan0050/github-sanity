import Link from "next/link";
import ListImageTextAndTitleItem from "./ListImageTextAndTitleItem";
import ListImageTextAndTitleItemReverse from "./ListImageTextAndTitleItemReverse";

const ListImageTextAndTitle = ({ data }) => {
	const {
		title,
		items,
		link: { url, text },
	} = data;

	return (
		((url && text) || title || items.length > 0) && (
			<div className="pt-10 pb-20">
				{title && <h2 className="text-5xl font-bold text-center">{title}</h2>}

				{items.length > 0 && (
					<ul className="mt-24 [&>li+li]:mt-32">
						{items.map((item, index) => (
							<li key={item._id + index}>
								{index % 2 === 0 && (
									<ListImageTextAndTitleItem index={index + 1} data={item} />
								)}

								{index % 2 === 1 && (
									<ListImageTextAndTitleItemReverse
										index={index + 1}
										data={item}
									/>
								)}
							</li>
						))}
					</ul>
				)}

				{url && text && (
					<div className="text-center mt-16">
						<Link
							href={url}
							className="inline-block px-10 py-4 rounded-full bg-pink-500 text-white font-semibold tracking-wide"
						>
							{text}
						</Link>
					</div>
				)}
			</div>
		)
	);
};

export default ListImageTextAndTitle;
