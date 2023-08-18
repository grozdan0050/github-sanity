import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PagintorItem from "./PaginatorItem";

const PaginatorPreviousPage = ({ currentPageIndex }) => {
	const FIRST_PAGE_INDEX = 1;

	const hasPreviousPage = currentPageIndex > FIRST_PAGE_INDEX;

	const pageToVisitIndex = currentPageIndex - 1;

	return (
		<PagintorItem
			isDisabled={!hasPreviousPage}
			disabledClassName="text-slate-300"
			pageToVisitIndex={pageToVisitIndex}
		>
			<FontAwesomeIcon icon={faCaretLeft} />
		</PagintorItem>
	);
};

export default PaginatorPreviousPage;
