import { PortableText } from "@portabletext/react";
import Table from "./Table";

const TextWithTitleAndTable = ({ data }) => {
	const { table, title, body } = data;

	return (
		<div className="py-24">
			<div className="text-center max-w-[83rem] mx-auto text-lg">
				<h3 className="text-5xl font-bold">{title}</h3>

				<div className="mt-12 max-w-[69rem] mx-auto [&>p+p]:mt-8">
					<PortableText value={body} />
				</div>
			</div>

			<div className="mt-12 text-lg text-sky-950">
				<Table data={table} />
			</div>
		</div>
	);
};

export default TextWithTitleAndTable;
