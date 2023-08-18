import TextWithTitle from "./variations/TextWithTitle";
import TextWithTitleAndTable from "./variations/TextWithTitleAndTable/TextWithTitleAndTable";

const Base = ({ data }) => {
	const { backgroundColor, _type } = data;

	return (
		<section
			style={{ "--bg-color": backgroundColor }}
			className="bg-[var(--bg-color)]"
		>
			<div className="shell">
				{_type === "textWithTitle" && <TextWithTitle data={data} />}
				{_type === "textWithTitleAndTable" && (
					<TextWithTitleAndTable data={data} />
				)}
			</div>
		</section>
	);
};

export default Base;
