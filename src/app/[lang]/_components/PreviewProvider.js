"use client";

import { useMemo } from "react";
import { LiveQueryProvider } from "@sanity/preview-kit";
import { getClient } from "../../../../sanity/lib/getClient";

const PreviewProvider = ({ children, token }) => {
	const client = useMemo(() => getClient({ token }), [token]);

	return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
};

export default PreviewProvider;
