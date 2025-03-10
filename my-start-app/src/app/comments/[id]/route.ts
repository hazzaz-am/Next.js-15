import { comments } from "../data";

type ParamsType = {
	id: string;
};

export async function GET(
	_request: Request,
	{ params }: { params: Promise<ParamsType> }
) {
	const { id } = await params;
	const comment = comments.find((comment) => comment.id === parseInt(id));
	return Response.json(comment);
}

export async function PATCH(
	request: Request,
	{ params }: { params: Promise<ParamsType> }
) {
	const { id } = await params;
	const comment = await request.json();
	const index = comments.findIndex((comment) => comment.id === parseInt(id));
	comments[index] = { ...comments[index], ...comment };
	return Response.json(comments[index]);
}

export async function DELETE(
	_request: Request,
	{ params }: { params: Promise<ParamsType> }
) {
	const { id } = await params;
	const index = comments.findIndex((comment) => comment.id === parseInt(id));
	const deletedComment = comments[index];
	comments.splice(index, 1);
	return Response.json(deletedComment);
}
