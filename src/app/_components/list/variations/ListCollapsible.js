import Accordion from "@/app/_components/accordion/Accordion";
import AccordionItem from "@/app/_components/accordion/AccordionItem";

const ListCollapsible = ({ data }) => {
	const { items, itemsBackgroundColor } = data;

	return (
		<div className="py-6 xs:py-10 md:py-16 xl:py-[7.5rem]">
			<Accordion className="mx-auto max-w-[55rem] px-4 xs:px-8 md:px-20 lg:px-0 [&>*+*]:mt-4">
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
		</div>
	);
};

export default ListCollapsible;
