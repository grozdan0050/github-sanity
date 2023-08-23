import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import Table from "./Table";

const TextWithTitleAndTable = ({ data }) => {
	const { table, title, body } = data;

	return (
		<div className={clsx(title && "py-24", !title && "pt-6 pb-24")}>
			<div className="text-center max-w-[83rem] mx-auto text-lg">
				{title && <h3 className="text-5xl font-bold">{title}</h3>}

				<div
					className={clsx(
						"mt-12 mx-auto [&>p+p]:mt-8",
						title && "max-w-[69rem]",
						!title && "text-left max-w-[60rem] text-xl font-semibold"
					)}
				>
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
