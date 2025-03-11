import Form from "next/form";

export default function Search() {
	return (
		<div className="flex flex-col items-center w-full max-w-md mx-auto mt-8">
			<Form action="/products-db" className="w-full">
				<div className="flex gap-2">
					<input
						type="text"
						name="query"
						placeholder="Search..."
						className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						type="submit"
						className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						Search
					</button>
				</div>
			</Form>
		</div>
	);
}
