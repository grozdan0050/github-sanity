import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";

const PagintorItem = ({
	children,
	containerClassName,
	buttonClassName,
	handleClick,
	isDisabled,
	disabledClassName,
	pageToVisitIndex,
}) => {
	const basePath = useParams().uid;

	return (
		<li className={containerClassName}>
			{!isDisabled && !handleClick && (
				<Link
					href={`${basePath}?page=${pageToVisitIndex}`}
					className={clsx(
						"grid h-[3.25rem] w-[3.25rem] place-items-center rounded-xl border-2 border-slate-300 bg-white hover:bg-slate-100 md:h-16 md:w-16 lg:h-20 lg:w-20",
						buttonClassName,
						isDisabled &&
							"cursor-not-allowed hover:bg-transparent" +
								" " +
								disabledClassName,
						isDisabled &&
							disabledClassName === undefined &&
							"!border-slate-200 !bg-slate-200"
					)}
				>
					{children}
				</Link>
			)}

			{!isDisabled && handleClick && (
				<button
					className={clsx(
						"grid h-[3.25rem] w-[3.25rem] place-items-center rounded-xl border-2 border-slate-300 bg-white hover:bg-slate-100 md:h-16 md:w-16 lg:h-20 lg:w-20",
						buttonClassName,
						isDisabled &&
							"cursor-not-allowed hover:bg-transparent" +
								" " +
								disabledClassName,
						isDisabled &&
							disabledClassName === undefined &&
							"!border-slate-200 !bg-slate-200"
					)}
					onClick={handleClick}
				>
					{children}
				</button>
			)}

			{isDisabled && (
				<button
					className={clsx(
						"grid h-[3.25rem] w-[3.25rem] place-items-center rounded-xl border-2 border-slate-300 bg-white hover:bg-slate-100 md:h-16 md:w-16 lg:h-20 lg:w-20",
						buttonClassName,
						isDisabled &&
							"cursor-not-allowed hover:bg-transparent" +
								" " +
								disabledClassName,
						isDisabled &&
							disabledClassName === undefined &&
							"!border-slate-200 !bg-slate-200"
					)}
					disabled
				>
					{children}
				</button>
			)}
		</li>
	);
};

export default PagintorItem;
