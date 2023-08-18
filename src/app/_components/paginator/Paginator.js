import PaginatorLastPages from "./PaginatorLastPages";
import PaginatorFirstPages from "./PaginatorFirstPages";
import PaginatorNextPage from "./PaginatorNextPage";
import PaginatorPreviousPage from "./PaginatorPreviousPage";
import PaginatorItem from "./PaginatorItem";
import PaginatorEllipsisItem from "./PaginatorEllipsisItem";
import clsx from "clsx";

const Paginator = ({ className, currentPageIndex, numberOfPages }) => {
	const isPaginatorSmall = numberOfPages > 1 && numberOfPages < 6;
	const isPaginatorBig = numberOfPages > 5;

	return (
		<ul
			className={clsx(
				"relative flex items-center justify-center gap-2 px-4 text-2xl sm:gap-3 md:gap-4",
				className
			)}
		>
			<PaginatorPreviousPage currentPageIndex={currentPageIndex} />

			{isPaginatorSmall &&
				Array(numberOfPages)
					.fill(0)
					.map((_, index) => {
						const pageIndex = index + 1;

						return (
							<PaginatorItem
								key={pageIndex}
								isDisabled={Number(currentPageIndex) === pageIndex}
								pageToVisitIndex={pageIndex}
							>
								{pageIndex}
							</PaginatorItem>
						);
					})}

			{isPaginatorBig && (
				<>
					<PaginatorFirstPages
						className="hidden xs:block"
						currentPageIndex={currentPageIndex}
					/>

					<PaginatorEllipsisItem
						currentPageIndex={currentPageIndex}
						numberOfPages={numberOfPages}
					/>

					<PaginatorLastPages
						className="hidden xs:block"
						currentPageIndex={currentPageIndex}
						numberOfPages={numberOfPages}
					/>
				</>
			)}

			<PaginatorNextPage
				currentPageIndex={currentPageIndex}
				numberOfPages={numberOfPages}
			/>
		</ul>
	);
};

export default Paginator;
