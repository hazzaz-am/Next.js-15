import { headers } from "next/headers";

export async function GET() {
	const headerList = await headers();
	console.log(headerList.get("Authorization"));
	return new Response("<h1>Hello, From Dashboard Data</h1>", {
		headers: {
			"Content-Type": "text/html",
		},
	});
}
