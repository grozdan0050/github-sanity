"use client";

import { useMemo } from "react";
import { getClient } from "../../../sanity/lib/getClient";
import { LiveQueryProvider } from "@sanity/preview-kit";

const PreviewProvider = ({ children, token }) => {
	const client = useMemo(() => getClient({ token }));

	return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
};

export default PreviewProvider;
