import SanityNextImage from "@/app/_components/SanityNextImage";
import { PortableText } from "@portabletext/react";

const ListTextWithTitleTextAndImage = ({ data }) => {
	const { image, title, body, items } = data;

	return (
		<div className="flex flex-wrap py-24">
			<div className="w-1/2">
				<div className="pt-32 mr-10">
					<SanityNextImage data={image} />
				</div>
			</div>

			<div className="w-1/2">
				<div className="max-w-[41rem] text-lg ml-10">
					<h3 className="font-bold text-[3.125rem] leading-[1.2]">{title}</h3>

					<ul className="mt-8 pl-14 pr-6 [&>*+*]:mt-6">
						{items.map((item) => {
							const { _id, body } = item;

							return (
								<li
									key={_id}
									className="before:w-10 before:aspect-square before:inline-block before:border-[1rem] before:bg-red-200 before:rounded-full flex before:shrink-0 items-start before:mr-4"
								>
									<PortableText value={body} />
								</li>
							);
						})}
					</ul>

					<div className="mt-8">
						<PortableText value={body} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListTextWithTitleTextAndImage;
