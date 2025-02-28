import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const token2 = request.cookies.get("token");
	const cookiesStore = await cookies();
	const token = cookiesStore.get("token");
	console.log(token, token2);
	return new Response("Hello from profile", {
		headers: {
			"Set-Cookie": "token=dark",
		},
	});
}
