import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("query");
	const filteredComments = comments.filter((comment) => {
		return query ? comment.comment.includes(query) : comment;
	});
	return Response.json(filteredComments);
}

export async function POST(request: Response) {
	const comment = await request.json();
	const newComment = {
		id: comments.length + 1,
		comment: comment.comment,
	};
	comments.push(newComment);
	return new Response(JSON.stringify(newComment), {
		status: 201,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
