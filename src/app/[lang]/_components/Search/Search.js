"use client";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import SearchBox from "./SearchBox";
import SearchHits from "./SearchHits";

const searchClient = algoliasearch(
	process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
	process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY
);

export default function Search() {
	return (
		<div className="relative">
			<InstantSearch searchClient={searchClient} indexName="news">
				<SearchBox />

				<SearchHits />
			</InstantSearch>
		</div>
	);
}
