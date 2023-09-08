"use client";

import { connectSearchBox } from "react-instantsearch-dom";

const SearchBox = ({ refine }) => {
	return (
		<div className="mx-auto w-[20rem]">
			<input
				type="search"
				className="w-full inline-block px-4 py-2 rounded-3xl border-[1px] border-slate-400"
				placeholder="Search..."
				onChange={(e) => refine(e.currentTarget.value)}
			/>
		</div>
	);
};

export default connectSearchBox(SearchBox);
