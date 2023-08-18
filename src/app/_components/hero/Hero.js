import AnimatedHero from "./variations/AnimatedHero";
import DefaultHero from "./variations/DefaultHero";
import HeroWithForm from "./variations/HeroWithForm";

const Hero = ({ data }) => {
	const { _type, backgroundColor } = data;

	return (
		<section
			style={{ "--bg-color": backgroundColor }}
			className="bg-[var(--bg-color)]"
		>
			<div className="shell">
				{_type === "defaultHero" && <DefaultHero data={data} />}
				{_type === "animatedHero" && <AnimatedHero data={data} />}
				{_type === "heroWithForm" && <HeroWithForm data={data} />}
			</div>
		</section>
	);
};

export default Hero;
