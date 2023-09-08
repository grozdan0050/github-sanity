import { PortableText } from "@portabletext/react";

const TextWithTitle = ({ data }) => {
	const { title, body } = data;

	return (
		(title || body) && (
			<div className="shell-xs py-20">
				{title && <h1 className="text-5xl font-bold">{title}</h1>}

				{body && (
					<div className="mt-12 text-lg">
						<PortableText value={body} />
					</div>
				)}
			</div>
		)
	);
};

export default TextWithTitle;
