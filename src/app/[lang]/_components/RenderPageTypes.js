import Base from "./base/Base";
import Hero from "./hero/Hero";
import Link from "./link/Link";
import List from "./list/List";

const RenderPageTypes = ({ types, index }) => {
	const getComponent = (type) => {
		const { _type } = type;

		switch (_type) {
			case "defaultHero":
			case "animatedHero":
			case "heroWithForm":
				return <Hero key={_type + index} data={type} />;
			case "listInline":
			case "listCollapsible":
			case "listImageTextAndTitle":
			case "listLinkTitleTextDateAndImage":
			case "listCollapsibleWithTitleTextAndImage":
			case "listLinkTitleTextAndDate":
			case "listTextWithTitle":
			case "listTitleAndImages":
			case "listTextWithTitleTextAndImage":
				return <List key={_type + index} data={type} />;
			case "linkWithImage":
				return <Link key={_type + index} data={type} />;
			case "textWithTitle":
			case "textWithTitleAndTable":
				return <Base key={_type + index} data={type} />;
			default:
				return <div key={_type + index}>{_type}</div>;
		}
	};

	return <main>{types?.map((type, index) => getComponent(type, index))}</main>;
};

export default RenderPageTypes;
