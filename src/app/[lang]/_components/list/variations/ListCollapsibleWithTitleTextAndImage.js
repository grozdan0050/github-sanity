import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Accordion from "../../accordion/Accordion";
import AccordionItem from "../../accordion/AccordionItem";
import SanityNextImage from "../../SanityNextImage";

const ListCollapsibleWithTitleTextAndImage = ({ data }) => {
	const { title, body, items, itemsBackgroundColor, link, image } = data;

	const main = title || body || items.length > 0 || (link.text && link.url);

	return (
		(main || image) && (
			<div className="flex flex-wrap py-24">
				{main && (
					<div className="w-1/2">
						<div className="max-w-[41rem] ml-auto mr-10">
							{title && <h3 className="text-5xl font-bold">{title}</h3>}

							{body && (
								<div className="mt-8">
									<PortableText value={body} />
								</div>
							)}

							{items.length > 0 && (
								<Accordion className="[&>*+*]:mt-4 mt-8">
									{items.map((item, index) => {
										const { title, body, _id } = item;

										return (
											(title || body) &&
											_id && (
												<AccordionItem
													title={title}
													titleClassName="font-bold leading-6 tracking-normal text-lg text-left pr-2  text-sky-950"
													arrowClasses="bg-sky-950 text-white rounded-full leading-[1] px-3 py-2 text-2xl"
													body={body}
													spaceBetweenBodyAndTitle="mt-2"
													key={_id + index}
													className="rounded-[1.25rem] px-8 py-6"
													backgroundColor={itemsBackgroundColor}
													isActive={!index}
												/>
											)
										);
									})}
								</Accordion>
							)}

							{link.text && link.url && (
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
						<div className="w-max ml-10 mr-auto pt-10">
							<SanityNextImage data={image} />
						</div>
					</div>
				)}
			</div>
		)
	);
};

export default ListCollapsibleWithTitleTextAndImage;
