import Iframe from "sanity-plugin-iframe-pane";

export const defaultDocumentNode = (S, { schemaType }) => {
	switch (schemaType) {
		case `page`:
			return S.document().views([
				S.view.form(),
				S.view
					.component(Iframe)
					.options({
						url: (doc) => {
							return `http://localhost:3000/en/api/preview?uid=${doc.uid}`;
						},
					})
					.title("Preview"),
			]);
		default:
			return S.document().views([S.view.form()]);
	}
};
