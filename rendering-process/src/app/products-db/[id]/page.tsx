import { getProduct } from "@/prisma-db";
import EditProductForm from "./product-edit-form";

type Props = {
	params: {
		id: string;
	};
};

export default async function EditProduct({ params }: Props) {
	const { id } = await params;
	const productId = parseInt(id);
	const product = await getProduct(productId);

	if (!product) {
		return (
			<div className="container mx-auto px-4 py-8">
				<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
					Product not found
				</div>
			</div>
		);
	}

	return <EditProductForm product={product} />;
}
