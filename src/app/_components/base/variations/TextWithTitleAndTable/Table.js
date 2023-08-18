import X from "./X";
import Check from "./Check";

const Table = ({ data }) => {
	const { rows, oddRowBackgroundColor, evenRowBackgroundColor } = data;

	return (
		<table className="w-full max-w-[83rem] mx-auto">
			<thead>
				<tr
					style={{
						"--row-bg-color": oddRowBackgroundColor,
					}}
				>
					{rows[0].cells.map((cell, index) => (
						<th
							key={rows[0]._key + index}
							className="text-left bg-[var(--row-bg-color)] first:rounded-l-3xl last:rounded-r-3xl p-6"
						>
							{cell !== "yes" && cell !== "no" && cell}
							{cell === "yes" && <Check />}
							{cell === "no" && <X />}
						</th>
					))}
				</tr>
			</thead>

			<tbody>
				{rows.slice(1).map((row, index) => {
					const { _key, cells } = row;

					return (
						<tr
							key={_key}
							style={{
								"--row-bg-color":
									index % 2 === 1
										? oddRowBackgroundColor
										: evenRowBackgroundColor,
							}}
						>
							{cells.map((cell, index) => (
								<td
									key={_key + index}
									className="text-left bg-[var(--row-bg-color)] first:rounded-l-3xl last:rounded-r-3xl p-6 first:font-semibold first:px-8"
								>
									{cell !== "yes" && cell !== "no" && cell}
									{cell === "yes" && <Check />}
									{cell === "no" && <X />}
								</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
