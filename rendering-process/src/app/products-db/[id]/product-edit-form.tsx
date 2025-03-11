"use client";

import { editProduct, FormState } from "@/actions/products";
import Link from "next/link";
import { useActionState } from "react";
import { Product } from "../page";

export default function EditProductForm({ product }: { product: Product }) {
	const initialState: FormState = {
		errors: {},
	};

	const editProductWithId = editProduct.bind(null, product.id);

	const [state, formAction, isPending] = useActionState(
		editProductWithId,
		initialState
	);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold text-slate-800 mb-8">Edit Product</h1>

			<form
				action={formAction}
				className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
			>
				<input type="hidden" name="id" value={product.id} />

				<div className="mb-6">
					<label
						htmlFor="title"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Product Title
					</label>
					<input
						type="text"
						id="title"
						name="title"
						defaultValue={product.title}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
					/>
					{state.errors.title && (
						<p className="text-red-500">{state.errors.title}</p>
					)}
				</div>

				<div className="mb-6">
					<label
						htmlFor="price"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Price (in cents)
					</label>
					<input
						type="number"
						id="price"
						name="price"
						defaultValue={product.price}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
					/>
					{state.errors.price && (
						<p className="text-red-500">{state.errors.price}</p>
					)}
				</div>

				<div className="mb-6">
					<label
						htmlFor="description"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Description
					</label>
					<textarea
						id="description"
						name="description"
						defaultValue={product.description ?? ""}
						rows={4}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
					/>
					{state.errors.description && (
						<p className="text-red-500">{state.errors.description}</p>
					)}
				</div>

				<div className="flex justify-between">
					<button
						type="submit"
						className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
						disabled={isPending}
					>
						Update Product
					</button>

					<Link
						href="/products-db"
						className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
					>
						Cancel
					</Link>
				</div>
			</form>
		</div>
	);
}
