import { PortableText } from "@portabletext/react";
import SanityNextImage from "../../SanityNextImage";

const DefaultHero = ({ data }) => {
	const { title, body, image } = data;

	return (
		<div className="flex flex-wrap py-14">
			<main className="w-1/2 py-14">
				<div className="max-w-[35rem] mx-auto">
					<h1 className="text-5xl font-bold text-sky-950">{title}</h1>

					<div className="text-lg mt-8 [&_[href^=mailto]]:underline [&_[href^=mailto]]:text-pink-500 [&_[href^=mailto]]:font-semibold">
						<PortableText value={body} />
					</div>
				</div>
			</main>

			<aside className="w-1/2">
				<SanityNextImage data={image} />
			</aside>
		</div>
	);
};

export default DefaultHero;
