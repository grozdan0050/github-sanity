"use client";

import { connectStateResults } from "react-instantsearch-dom";
import Link from "next/link";
import { useParams } from "next/navigation";

const SearchHits = ({ searchState, searchResults }) => {
	const validQuery = searchState.query?.length >= 3;
	const locale = useParams().lang;

	return searchState.query && validQuery ? (
		<div className="absolute bg-white top-full left-1/2 w-[200%] -translate-x-1/2 mt-2 py-3 px-5 rounded-xl drop-shadow-xl border-slate-100 border-[1px]">
			{searchResults?.hits.length === 0 && <div>No results found!</div>}

			{searchResults?.hits.length > 0 &&
				searchResults.hits.map((hit) => (
					<div
						key={hit.objectID}
						className="last:mb-0 border-b-[1px] border-slate-300 last:border-b-0 py-3 px-2 flex items-start gap-4"
					>
						<Link href={"/press"} className="hover:underline">
							{hit.title[locale]}
						</Link>

						<span className="ml-auto self-end text-slate-400">
							{hit.publishDate}
						</span>
					</div>
				))}
		</div>
	) : null;
};

export default connectStateResults(SearchHits);
