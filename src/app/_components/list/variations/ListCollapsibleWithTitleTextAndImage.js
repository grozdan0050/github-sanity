import Accordion from "@/app/_components/accordion/Accordion";
import AccordionItem from "@/app/_components/accordion/AccordionItem";
import { PortableText } from "@portabletext/react";
import SanityNextImage from "@/app/_components/SanityNextImage";
import Link from "next/link";

const ListCollapsibleWithTitleTextAndImage = ({ data }) => {
	const { title, body, items, itemsBackgroundColor, link, image } = data;

	return (
		<div className="flex flex-wrap py-24">
			<div className="w-1/2">
				<div className="max-w-[41rem] ml-auto mr-10">
					<h3 className="text-5xl font-bold">{title}</h3>

					<div className="mt-8">
						<PortableText value={body} />
					</div>

					<Accordion className="[&>*+*]:mt-4 mt-8">
						{items.map((item, index) => (
							<AccordionItem
								title={item.title}
								titleClassName="font-bold leading-6 tracking-normal text-lg text-left pr-2  text-sky-950"
								arrowClasses="bg-sky-950 text-white rounded-full leading-[1] px-3 py-2 text-2xl"
								body={item.body}
								spaceBetweenBodyAndTitle="mt-2"
								key={item._id + index}
								className="rounded-[1.25rem] px-8 py-6"
								backgroundColor={itemsBackgroundColor}
								isActive={!index}
							/>
						))}
					</Accordion>

					<Link
						href={link.url}
						className="inline-block mt-8 bg-white text-pink-500 border-2 border-pink-500 rounded-full px-6 py-3 text-lg font-semibold"
					>
						{link.text}
					</Link>
				</div>
			</div>

			<div className="w-1/2">
				<div className="w-max ml-10 mr-auto pt-10">
					<SanityNextImage data={image} />
				</div>
			</div>
		</div>
	);
};

export default ListCollapsibleWithTitleTextAndImage;
