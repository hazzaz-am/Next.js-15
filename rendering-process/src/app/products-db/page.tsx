import { getProducts } from "@/prisma-db";
import ProductDetail from "./product-detail";

export type Product = {
	id: number;
	price: number;
	title: string;
	description: string | null;
};

export default async function ProductsDB({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const { query } = await searchParams;
	const products: Product[] = await getProducts(query);

	return <ProductDetail products={products} />;
}
