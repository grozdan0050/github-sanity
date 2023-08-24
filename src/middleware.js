import { NextResponse } from "next/server";
import supportedLanguages from "../supportedLanguages";
import getLocale from "./app/[lang]/helpers/getLocale";

const locales = supportedLanguages.map((lang) => lang.id);

export function middleware(request) {
	const pathname = request.nextUrl.pathname;

	if (pathname.startsWith("/admin")) {
		return;
	}

	if (pathname.includes("/admin")) {
		return NextResponse.redirect(new URL("/admin", request.url));
	}

	const pathnameIsMissingLocale = locales.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	);

	const cookie = request.cookies.get("NEXT_LOCALE")?.value;
	const header = request.headers.get("accept-language");

	const locale = getLocale(cookie, header);

	if (pathnameIsMissingLocale) {
		return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
	}
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
