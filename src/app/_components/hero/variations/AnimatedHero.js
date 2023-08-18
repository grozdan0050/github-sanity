import SanityNextImage from "@/app/_components/SanityNextImage";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const AnimatedHero = ({ data }) => {
	const { title, body, link, image } = data;

	return (
		<div className="flex flex-wrap py-14">
			<main className="w-1/2 py-14">
				<div className="max-w-[35rem] mx-auto">
					<h1 className="text-6xl font-bold text-sky-950">{title}</h1>

					<div className="text-lg mt-8 tracking-[0.001em]">
						<PortableText value={body} />
					</div>

					<Link
						href={link.url}
						className="mt-8 inline-block rounded-full bg-pink-500 text-white px-14 py-4 font-semibold text-lg"
					>
						{link.text}
					</Link>
				</div>
			</main>

			<aside className="w-1/2">
				<SanityNextImage data={image} />
			</aside>
		</div>
	);
};

export default AnimatedHero;
