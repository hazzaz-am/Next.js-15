import { movies } from "../db";

export async function GET(
	_req: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;
	const movie = movies.find((m) => m.id === +id);

	return movie
		? new Response(JSON.stringify(movie))
		: new Response("Movie Not Found", { status: 404 });
}

export async function PATCH(
	req: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;
	const movieId = +id;

	const movie = movies.find((m) => m.id === movieId);

	try {
		const updatedMovie = await req.json();
		const index = movies.findIndex((m) => m.id === movieId);

		if (!movie) {
			return new Response(JSON.stringify({ error: "Movie Not Found" }), {
				status: 404,
			});
		}

		movies[index] = {
			...movie,
			...updatedMovie,
		};

		return new Response(JSON.stringify(movies[index]), { status: 200 });
	} catch (error) {
		const customError = error instanceof Error ? error.message : error;
		return new Response(JSON.stringify({ error: customError }), {
			status: 400,
		});
	}
}

export async function DELETE(
	_req: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;
	const movieId = +id;

	const movieIndex = movies.findIndex((mov) => mov.id === movieId);
	if (movieIndex === -1) {
		return new Response(JSON.stringify({ error: "Movie Not Found" }), {
			status: 404,
		});
	}

	movies.splice(movieIndex, 1);

	return new Response(
		JSON.stringify({
			message: "Deleted Successfully",
		}),
		{ status: 200 }
	);
}
