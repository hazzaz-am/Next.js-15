import { getProducts } from "@/prisma-db";
import ProductDetail from "./product-detail";

export type Product = {
	id: number;
	price: number;
	title: string;
	description: string | null;
};

export default async function ProductsDB() {
	const products: Product[] = await getProducts();

	return <ProductDetail products={products} />;
}
