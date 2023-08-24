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
						{footer.logo && <SanityNextImage data={footer.logo} />}

						{footer.body && (
							<div className="mt-10">
								<PortableText value={footer.body} />
							</div>
						)}
					</div>

					<div className="w-1/2 h-auto">
						{footer.chamberOfCommerceNumber && (
							<div className="flex items-center justify-end h-full">
								<span className="inline-block">
									{footer.chamberOfCommerceNumber}
								</span>
							</div>
						)}
					</div>
				</div>

				<hr />

				<nav className="flex flex-wrap items-center justify-between pt-4 pb-8">
					{footer.copyright && (
						<span className="font-medium">{footer.copyright}</span>
					)}

					{footer.navigation.length > 0 && (
						<ul className="flex flex-wrap gap-8 font-semibold">
							{footer.navigation.map((item, index) => {
								const {
									_key,
									link: { url, text },
								} = item;

								return (
									_key &&
									url &&
									text && (
										<li key={_key + index}>
											<Link href={url}>{text}</Link>
										</li>
									)
								);
							})}
						</ul>
					)}
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
