import { PortableText } from "@portabletext/react";
import SanityNextImage from "../../../SanityNextImage";

const ListImageTextAndTitleItemReverse = ({ data, index }) => {
	const { badge, title, body, image } = data;

	return (
		(title || body || image) && (
			<div className="flex flex-wrap">
				{(title || body) && (
					<div className="w-1/2">
						<div
							className="max-w-[27rem] text-lg ml-auto mr-20"
							style={{
								"--badge-icon-color": badge.iconColor ?? "#ffffff",
								"--badge-bg-color": badge.backgroundColor ?? "#000000",
							}}
						>
							<span className="rounded-full bg-[var(--badge-bg-color)] w-20 inline-block aspect-square grid place-items-center text-4xl text-[var(--badge-icon-color)] font-medium">
								0{index}
							</span>

							{title && (
								<h3 className="text-4xl font-semibold mt-6 mb-4">{title}</h3>
							)}

							{body && <PortableText value={body} />}
						</div>
					</div>
				)}

				{image && (
					<div className="w-1/2">
						<div className="mr-auto w-max">
							<SanityNextImage data={image} />
						</div>
					</div>
				)}
			</div>
		)
	);
};

export default ListImageTextAndTitleItemReverse;
