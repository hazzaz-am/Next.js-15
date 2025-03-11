"use client";

import { removeProduct } from "@/actions/products";
import Form from "next/form";
import Link from "next/link";
import { useOptimistic } from "react";

export type Product = {
	id: number;
	price: number;
	title: string;
	description: string | null;
};

export default function ProductDetail({ products }: { products: Product[] }) {
	const [optimisticProducts, setOptimisticProducts] = useOptimistic(
		products,
		(currentProducts, productId) => {
			return currentProducts.filter((product) => product.id !== productId);
		}
	);

	const removeProductByID = async (id: number) => {
		setOptimisticProducts(id);
		await removeProduct(id);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold text-slate-800 mb-8">Our Products</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{optimisticProducts.map((product) => (
					<div
						key={product.id}
						className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-200"
					>
						<div className="p-6">
							<Link href={`/products-db/${product.id}`}>
								<h2 className="text-xl font-semibold text-slate-700 mb-2">
									{product.title}
								</h2>
							</Link>
							<p className="text-2xl font-bold text-emerald-600 mb-4">
								${(product.price / 100).toFixed(2)}
							</p>
							{product.description && (
								<p className="text-slate-500">{product.description}</p>
							)}
							<Form action={removeProductByID.bind(null, product.id)}>
								<button className="p-2 bg-red-500 rounded-md mt-3 cursor-pointer">
									Delete
								</button>
							</Form>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
