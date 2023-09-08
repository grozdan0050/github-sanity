import { PortableText } from "@portabletext/react";
import Link from "next/link";
import SanityNextImage from "./SanityNextImage";

const Footer = ({
	footer: {
		backgroundColor,
		logo,
		body,
		chamberOfCommerceNumber,
		copyright,
		navigation,
	},
}) => {
	return (
		<footer
			style={{ "--bg-color": backgroundColor ?? "#ffffff" }}
			className="bg-[var(--bg-color)]"
		>
			<div className="shell-sm">
				{(logo || body || chamberOfCommerceNumber) && (
					<div className="flex flex-wrap py-10">
						<div className="w-1/2 h-auto">
							{logo && <SanityNextImage data={logo} />}

							{body && (
								<div className="mt-10">
									<PortableText value={body} />
								</div>
							)}
						</div>

						{chamberOfCommerceNumber && (
							<div className="w-1/2 h-auto">
								<div className="flex items-center justify-end h-full">
									<span className="inline-block">
										{chamberOfCommerceNumber}
									</span>
								</div>
							</div>
						)}
					</div>
				)}

				{(navigation.length > 0 || copyright) && (
					<>
						<hr />

						<nav className="flex flex-wrap items-center justify-between pt-4 pb-8">
							{copyright && <span className="font-medium">{copyright}</span>}

							{navigation.length > 0 && (
								<ul className="flex flex-wrap gap-8 font-semibold">
									{navigation.map((item) => {
										const {
											_id,
											link: { url, text },
										} = item;

										return (
											_id &&
											url &&
											text && (
												<li key={_id}>
													<Link href={url}>{text}</Link>
												</li>
											)
										);
									})}
								</ul>
							)}
						</nav>
					</>
				)}
			</div>
		</footer>
	);
};

export default Footer;
