import Link from "next/link";
import SanityNextImage from "../../SanityNextImage";

const LinkWithImage = ({ data }) => {
	const { title, image, link } = data;

	return (
		<div className="flex flex-wrap py-20">
			<div className="w-1/2 flex items-center justify-center">
				<div className="max-w-[20rem]">
					<h3 className="text-5xl font-bold text-sky-950">{title}</h3>

					<Link
						href={link.url}
						className="py-5 px-10 inline-block text-white bg-pink-500 font-bold rounded-[2rem] mt-6 tracking-[.05em] text-center"
					>
						{link.text}
					</Link>
				</div>
			</div>

			<div className="w-1/2">
				<div className="w-full">
					<SanityNextImage data={image} />
				</div>
			</div>
		</div>
	);
};

export default LinkWithImage;
