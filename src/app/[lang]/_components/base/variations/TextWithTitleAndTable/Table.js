import X from "./X";
import Check from "./Check";

const Table = ({ data }) => {
	const { rows, oddRowBackgroundColor, evenRowBackgroundColor } = data;

	return (
		rows.length > 0 && (
			<table className="w-full max-w-[83rem] mx-auto">
				{rows.length > 0 && (
					<thead>
						<tr
							style={{
								"--row-bg-color": oddRowBackgroundColor ?? "#ffffff",
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
				)}

				{rows.length > 1 && (
					<tbody>
						{rows.slice(1).map((row, index) => {
							const { _key, cells } = row;

							return (
								cells.length > 0 &&
								_key && (
									<tr
										key={_key}
										style={{
											"--row-bg-color":
												index % 2 === 1
													? oddRowBackgroundColor ?? "#ffffff"
													: evenRowBackgroundColor ?? "#ffffff",
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
								)
							);
						})}
					</tbody>
				)}
			</table>
		)
	);
};

export default Table;
