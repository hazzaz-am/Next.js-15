import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export default function AddProduct() {
	async function createProduct(formData: FormData) {
		"use server";
		const title = formData.get("title") as string;
		const price = formData.get("price") as string;
		const description = formData.get("description") as string;

		addProduct(title, parseInt(price), description);
    redirect("/products-db")
	}

	return (
		<div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
			<h1 className="text-2xl font-bold mb-6">Add New Product</h1>

			<form action={createProduct}>
				<div className="mb-4">
					<label
						htmlFor="title"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Title
					</label>
					<input
						type="text"
						id="title"
						name="title"
						required
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="price"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Price
					</label>
					<input
						type="number"
						id="price"
						name="price"
						required
						min="0"
						step="0.01"
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div className="mb-6">
					<label
						htmlFor="description"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Description
					</label>
					<textarea
						id="description"
						name="description"
						required
						rows={4}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<button
					type="submit"
					className={`w-full py-2 px-4 rounded-md text-white font-medium bg-blue-600 transition-colors`}
				>
					Add Product
				</button>
			</form>
		</div>
	);
}
