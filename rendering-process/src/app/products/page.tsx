import Link from "next/link";

const ProductsPage = () => {
	return (
		<>
			<Link href="/products/1">Product 1</Link>
			<Link href="/products/2">Product 2</Link>
			<Link href="/products/3">Product 3</Link>
		</>
	);
};
export default ProductsPage;
