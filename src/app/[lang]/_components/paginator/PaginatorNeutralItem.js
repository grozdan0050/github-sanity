import PagintorItem from "./PaginatorItem";

const PaginatorNeutralItem = () => {
	return (
		<PagintorItem
			className="border-none"
			isDisabled={true}
			disabledClassName=""
		>
			...
		</PagintorItem>
	);
};

export default PaginatorNeutralItem;
