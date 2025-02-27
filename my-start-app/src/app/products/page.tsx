import Link from "next/link";

export default function ProductsPage() {
  const productId = 100
  return (
		<div>
			Products Page
			<li>
				<Link href="/products/1">Product 1</Link>
			</li>
			<li>
				<Link href="/products/2">Product 2</Link>
			</li>
			<li>
				<Link href="/products/3">Product 3</Link>
			</li>
			<li>
				<Link href={`/products/${productId}`} replace>Dynamic Product</Link>
			</li>
		</div>
	);
}