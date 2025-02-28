import { comments } from "./data";

export async function GET() {
	return Response.json(comments);
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
