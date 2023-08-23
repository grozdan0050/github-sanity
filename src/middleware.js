import { NextResponse } from "next/server";
import supportedLanguages from "../supportedLanguages";
import getLocale from "./app/[lang]/helpers/getLocale";

const locales = supportedLanguages.map((lang) => lang.id);

export function middleware(request) {
	const pathname = request.nextUrl.pathname;
	const pathnameIsMissingLocale = locales.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	);

	const cookie = request.cookies.get("NEXT_LOCALE").value;
	const header = request.headers.get("accept-language");

	const locale = getLocale(cookie, header);

	if (pathnameIsMissingLocale) {
		return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
	}
}

export const config = {
	matcher: ["/((?!_next).*)", "/"],
};
