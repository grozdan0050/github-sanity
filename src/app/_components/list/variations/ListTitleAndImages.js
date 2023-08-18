import SanityNextImage from "@/app/_components/SanityNextImage";

const ListTitleAndImages = ({ data }) => {
	const { title, items } = data;

	return (
		<div className="flex flex-wrap py-16">
			<div className="w-1/2">
				<div className="flex items-center h-full justify-end">
					<h2 className="text-4xl max-w-[33rem] font-semibold leading-[1.33] mr-16">
						{title}
					</h2>
				</div>
			</div>

			<div className="w-1/2">
				<div className="flex items-center justify-center">
					<ul className="flex flex-wrap -m-2">
						{items.map((item) => {
							const { _id, image } = item;

							return (
								<li key={_id} className="w-1/3 p-2">
									<div className="border-2 border-slate-200 rounded-3xl h-24 grid place-items-center">
										<SanityNextImage data={image} />
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ListTitleAndImages;
