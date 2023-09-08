"use client";

import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { PortableText } from "@portabletext/react";
import clsx from "clsx";

const AccordionItem = ({
	title,
	body,
	className,
	titleClassName,
	arrowClasses,
	spaceBetweenBodyAndTitle,
	bodyClassName,
	isActive,
	backgroundColor,
}) => {
	const bodyRef = useRef(null);
	const arrowIcon = useRef(null);

	const handleClick = (e) => {
		e.preventDefault();

		const classesToToggle = [
			"max-h-screen",
			"invisible",
			"max-h-0",
			spaceBetweenBodyAndTitle ?? "mt-4",
			"opacity-0",
		];

		classesToToggle.map((classToToggle) =>
			bodyRef.current.classList.toggle(classToToggle)
		);

		arrowIcon.current.classList.toggle("rotate-180");
	};

	return (
		(title || body) && (
			<li className={className} style={{ backgroundColor }}>
				{title && (
					<button
						className="inline-block flex w-full items-center justify-between"
						onClick={handleClick}
					>
						<span className={titleClassName}>{title}</span>

						<span className={clsx("inline-block", arrowClasses)}>
							<FontAwesomeIcon
								ref={arrowIcon}
								icon={faAngleUp}
								className={`transition-transform duration-300 ease-in-out ${
									isActive ? "" : " rotate-180"
								}`}
							/>
						</span>
					</button>
				)}

				{body && (
					<div
						className={clsx(
							"collapse-body",
							bodyClassName,
							isActive && `max-h-screen ${spaceBetweenBodyAndTitle ?? "mt-4"}`,
							!isActive && "invisible max-h-0 opacity-0"
						)}
						ref={bodyRef}
					>
						<PortableText value={body} />
					</div>
				)}
			</li>
		)
	);
};

export default AccordionItem;
