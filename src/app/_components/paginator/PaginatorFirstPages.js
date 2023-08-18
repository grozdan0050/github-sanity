import PagintorItem from "./PaginatorItem";

const PaginatorFirstPages = ({ className, currentPageIndex }) => {
	const FIRST_PAGE_INDEX = 1;
	const SECOND_PAGE_INDEX = 2;

	return (
		<>
			<PagintorItem
				isDisabled={Number(currentPageIndex) === FIRST_PAGE_INDEX}
				pageToVisitIndex={FIRST_PAGE_INDEX}
			>
				{FIRST_PAGE_INDEX}
			</PagintorItem>

			<PagintorItem
				containerClassName={className}
				isDisabled={Number(currentPageIndex) === SECOND_PAGE_INDEX}
				pageToVisitIndex={SECOND_PAGE_INDEX}
			>
				{SECOND_PAGE_INDEX}
			</PagintorItem>
		</>
	);
};

export default PaginatorFirstPages;
