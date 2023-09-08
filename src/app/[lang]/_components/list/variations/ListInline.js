import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortableText } from "@portabletext/react";

const ListInline = ({ data }) => {
	const { itemsBadge, items } = data;

	return (
		items.length > 0 && (
			<ul
				style={{
					"--badge-icon-color": itemsBadge.iconColor,
					"--badge-bg-color": itemsBadge.backgroundColor,
				}}
				className="flex flex-wrap gap-8 justify-center items-center py-14 px-28"
			>
				{items.map((item, index) => {
					const { _id, body, backgroundColor } = item;

					return (
						_id && (
							<li
								key={_id + index}
								style={{ "--item-bg-color": backgroundColor ?? "#ffffff" }}
								className="bg-[var(--item-bg-color)] p-6 rounded-3xl flex gap-4 items-center justify-start w-[calc((100%_-_4rem)_/_3)]"
							>
								<span className="inline-block text-[var(--badge-icon-color)] bg-[var(--badge-bg-color)] h-16 aspect-square rounded-full grid place-items-center">
									<FontAwesomeIcon
										icon={faCheck}
										className="text-2xl text-[var(--badge-icon-color)]"
									/>
								</span>

								{body && (
									<div className="inline-block font-medium tracking-wide text-xl">
										<PortableText value={body} />
									</div>
								)}
							</li>
						)
					);
				})}
			</ul>
		)
	);
};

export default ListInline;
