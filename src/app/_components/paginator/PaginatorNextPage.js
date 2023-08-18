import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PagintorItem from "./PaginatorItem";

const PaginatorNextPage = ({ currentPageIndex, numberOfPages }) => {
	const lastPageIndex = numberOfPages;

	const hasNextPage = currentPageIndex < lastPageIndex;

	const pageToVisitIndex = Number(currentPageIndex) + 1;

	return (
		<PagintorItem
			isDisabled={!hasNextPage}
			disabledClassName="text-slate-300"
			pageToVisitIndex={pageToVisitIndex}
		>
			<FontAwesomeIcon icon={faCaretRight} />
		</PagintorItem>
	);
};

export default PaginatorNextPage;
