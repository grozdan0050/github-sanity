import ListCollapsible from "./variations/ListCollapsible";
import ListCollapsibleWithTitleTextAndImage from "./variations/ListCollapsibleWithTitleTextAndImage";
import ListImageTextAndTitle from "./variations/ListImageTextAndTitle/ListImageTextAndTitle";
import ListInline from "./variations/ListInline";
import ListLinkTitleTextDateAndImage from "./variations/ListLinkTitleTextDateAndImage";
import ListLinkTitleTextAndDate from "./variations/ListLinkTitleTextAndDate";
import ListTextWithTitle from "./variations/ListTextWithTitle";
import ListTitleAndImages from "./variations/ListTitleAndImages";
import ListTextWithTitleTextAndImage from "./variations/ListTextWithTitleTextAndImage";

const List = ({ data }) => {
	const { backgroundColor, _type } = data;

	return (
		<section
			style={{ "--bg-color": backgroundColor }}
			className="bg-[var(--bg-color)]"
		>
			<div className="shell">
				{_type === "listCollapsible" && <ListCollapsible data={data} />}
				{_type === "listInline" && <ListInline data={data} />}
				{_type === "listImageTextAndTitle" && (
					<ListImageTextAndTitle data={data} />
				)}
				{_type === "listLinkTitleTextDateAndImage" && (
					<ListLinkTitleTextDateAndImage data={data} />
				)}
				{_type === "listCollapsibleWithTitleTextAndImage" && (
					<ListCollapsibleWithTitleTextAndImage data={data} />
				)}
				{_type === "listLinkTitleTextAndDate" && (
					<ListLinkTitleTextAndDate data={data} />
				)}
				{_type === "listTextWithTitle" && <ListTextWithTitle data={data} />}
				{_type === "listTitleAndImages" && <ListTitleAndImages data={data} />}
				{_type === "listTextWithTitleTextAndImage" && (
					<ListTextWithTitleTextAndImage data={data} />
				)}
			</div>
		</section>
	);
};

export default List;
