import { PortableText } from "@portabletext/react";
import Link from "next/link";
import SanityNextImage from "./SanityNextImage";

const Footer = ({ footer }) => {
	return (
		<footer
			style={{ "--bg-color": footer.backgroundColor }}
			className="bg-[var(--bg-color)]"
		>
			<div className="shell-sm">
				<div className="flex flex-wrap py-10">
					<div className="w-1/2 h-auto">
						<SanityNextImage data={footer.logo} />

						<div className="mt-10">
							<PortableText value={footer.body} />
						</div>
					</div>

					<div className="w-1/2 h-auto">
						<div className="flex items-center justify-end h-full">
							<span className="inline-block">
								{footer.chamberOfCommerceNumber}
							</span>
						</div>
					</div>
				</div>

				<hr />

				<nav className="flex flex-wrap items-center justify-between pt-4 pb-8">
					<span className="font-medium">{footer.copyright}</span>

					<ul className="flex flex-wrap gap-8 font-semibold">
						{footer.navigation.map((item, index) => (
							<li key={item._key + index}>
								<Link href={item.link.url}>{item.link.text}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
