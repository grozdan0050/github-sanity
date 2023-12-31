import { PortableText } from "@portabletext/react";

const ListTextWithTitle = ({ data }) => {
	const { items } = data;

	return (
		items?.length && (
			<div className="shell-xs">
				<ul className="py-24 [&>*+*]:mt-12">
					{items.map((item) => {
						const { _id, title, body } = item;

						return (
							(title || body) &&
							_id && (
								<li key={_id}>
									{title && <h2 className="text-4xl font-bold">{title}</h2>}

									{body && (
										<div className="mt-6">
											<PortableText value={body} />
										</div>
									)}
								</li>
							)
						);
					})}
				</ul>
			</div>
		)
	);
};

export default ListTextWithTitle;
