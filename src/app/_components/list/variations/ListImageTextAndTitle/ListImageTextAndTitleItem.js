import { PortableText } from "@portabletext/react";
import SanityNextImage from "@/app/_components/SanityNextImage";

const ListImageTextAndTitleItem = ({ data, index }) => {
	const { image, badge, title, body } = data;

	return (
		<div className="flex flex-wrap">
			<div className="w-1/2">
				<div className="ml-auto w-max">
					<SanityNextImage data={image} />
				</div>
			</div>

			<div className="w-1/2">
				<div
					className="max-w-[27rem] text-lg ml-20"
					style={{
						"--badge-icon-color": badge.iconColor,
						"--badge-bg-color": badge.backgroundColor,
					}}
				>
					<span className="rounded-full bg-[var(--badge-bg-color)] w-20 inline-block aspect-square grid place-items-center text-4xl text-[var(--badge-icon-color)] font-medium">
						0{index}
					</span>

					<h3 className="text-4xl font-semibold mt-6 mb-4">{title}</h3>

					<PortableText value={body} />
				</div>
			</div>
		</div>
	);
};

export default ListImageTextAndTitleItem;
