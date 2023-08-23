import { redirect } from "next/navigation";
import { draftMode } from "next/headers";

export async function GET(req) {
	const uid = req.nextUrl.searchParams.get("uid") ?? "";

	draftMode().enable();

	redirect(`/${uid === "home" ? "" : uid}`);
}
