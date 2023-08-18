import PagintorItem from "./PaginatorItem";

const PaginatorLastPages = ({ className, currentPageIndex, numberOfPages }) => {
	const lastPageIndex = numberOfPages;
	const secondToLastPageIndex = numberOfPages - 1;

	return (
		<>
			<PagintorItem
				containerClassName={className}
				isDisabled={Number(currentPageIndex) === secondToLastPageIndex}
				pageToVisitIndex={secondToLastPageIndex}
			>
				{secondToLastPageIndex}
			</PagintorItem>

			<PagintorItem
				isDisabled={Number(currentPageIndex) === lastPageIndex}
				pageToVisitIndex={lastPageIndex}
			>
				{lastPageIndex}
			</PagintorItem>
		</>
	);
};

export default PaginatorLastPages;
