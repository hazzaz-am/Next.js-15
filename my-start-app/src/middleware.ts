import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	// return NextResponse.redirect(new URL("/", request.url));
	// if (request.nextUrl.pathname === "/docs") {
	//   return NextResponse.redirect(new URL("/", request.nextUrl));
	// }
	const response = NextResponse.next();
	const theme = request.cookies.get("theme");
	if (!theme) {
		response.cookies.set("theme", "datk");
	}
	response.headers.set("Custom-Header", "Hello from middleware");
	return response;
}

// See "Matching Paths" below to learn more
// export const config = {
// 	matcher: "/docs",
// };
