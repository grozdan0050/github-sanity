import { useEffect, useRef, useState } from "react";
import PagintorItem from "./PaginatorItem";

const PaginatorEllipsisItem = ({ currentPageIndex, numberOfPages }) => {
	const SMALL_SCREEN_FIRST_DROPDOWN_PAGE_INDEX = 2;
	const FIRST_DROPDOWN_PAGE_INDEX = 3;

	const small_screen_last_dropdown_page_index = numberOfPages - 1;
	const last_dropdown_page_index = numberOfPages - 2;

	const [firstDropdownPageIndex, setFirstDropdownPageIndex] = useState(
		FIRST_DROPDOWN_PAGE_INDEX
	);
	const [lastDropdownPageIndex, setLastDropdownPageIndex] = useState(
		last_dropdown_page_index
	);

	const numberOfDropdownItems =
		lastDropdownPageIndex - firstDropdownPageIndex + 1;

	const dropdownRef = useRef();

	const handleClick = (e) => {
		e.preventDefault();

		dropdownRef.current.classList.toggle("hidden");
	};

	const handleResize = () => {
		if (window.innerWidth < 480) {
			setFirstDropdownPageIndex(SMALL_SCREEN_FIRST_DROPDOWN_PAGE_INDEX);
			setLastDropdownPageIndex(small_screen_last_dropdown_page_index);
		}

		if (window.innerWidth >= 480 && firstDropdownPageIndex === 2) {
			setFirstDropdownPageIndex(FIRST_DROPDOWN_PAGE_INDEX);
			setLastDropdownPageIndex(last_dropdown_page_index);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return (
		<>
			<PagintorItem
				buttonClassName="border-none"
				isDisabled={false}
				handleClick={handleClick}
			>
				<span className="pointer-events-none">...</span>
			</PagintorItem>

			<div
				ref={dropdownRef}
				className="absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 overflow-hidden rounded-xl border-2 border-slate-300 bg-white md:mt-4 [&>*+*]:border-t-2 [&>*+*]:border-t-slate-300"
			>
				{Array(numberOfDropdownItems)
					.fill(0)
					.map((_, index) => {
						const itemPageIndex = firstDropdownPageIndex + index;

						return (
							<PagintorItem
								key={itemPageIndex}
								buttonClassName="!rounded-none border-none !h-auto p-1"
								isDisabled={Number(currentPageIndex) === itemPageIndex}
								pageToVisitIndex={itemPageIndex}
							>
								{itemPageIndex}
							</PagintorItem>
						);
					})}
			</div>
		</>
	);
};

export default PaginatorEllipsisItem;
