import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import SanityNextImage from "./SanityNextImage";

const Header = ({ header, settings }) => {
	return (
		<header className="bg-[var(--bg-color)] sticky left-0 top-0 z-10">
			<div className="shell">
				<div className="p-8 flex items-center justify-between">
					{header.logo && <SanityNextImage data={header.logo} />}

					<nav className="flex items-center">
						{header.navigation.length > 0 && (
							<ul className="flex items-center mr-10 gap-6 font-semibold text-lg">
								{header.navigation.map(
									(item) =>
										item._id &&
										item.link.url &&
										item.link.text && (
											<li key={item._id}>
												<Link href={item.link.url}>{item.link.text}</Link>
											</li>
										)
								)}
							</ul>
						)}

						{settings.link.url && settings.link.text && (
							<Link
								href={settings.link.url}
								target="_blank"
								className="text-lg font-medium text-pink-500 bg-white px-5 py-2 rounded-full border-2 border-pink-500"
							>
								{settings.link.text}
							</Link>
						)}

						<LanguageSwitcher />
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
