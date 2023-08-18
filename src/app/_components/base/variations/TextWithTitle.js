import { PortableText } from "@portabletext/react";

const TextWithTitle = ({ data }) => {
	const { title, body } = data;

	return (
		<div className="shell-xs py-20">
			<h1 className="text-5xl font-bold">{title}</h1>

			<div className="mt-12 text-lg">
				<PortableText value={body} />
			</div>
		</div>
	);
};

export default TextWithTitle;
