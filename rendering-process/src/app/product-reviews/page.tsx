import Product from "@/components/product";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

const ProductReviewsPage = () => {
	return (
		<div>
			<h2>Product Reviews Page</h2>
			<Suspense fallback={<p>Loading Product .......</p>}>
				<Product />
			</Suspense>
			<Suspense fallback={<p>Loading Reviews .....</p>}>
				<Reviews />
			</Suspense>
		</div>
	);
};
export default ProductReviewsPage;
