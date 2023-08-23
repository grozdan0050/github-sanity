import LinkWithImage from "./variations/LinkWithImage";

const Link = ({ data }) => {
	const { backgroundColor, _type } = data;

	return (
		<section
			style={{ "--bg-color": backgroundColor }}
			className="bg-[var(--bg-color)]"
		>
			<div className="shell">
				{_type === "linkWithImage" && <LinkWithImage data={data} />}
			</div>
		</section>
	);
};

export default Link;
