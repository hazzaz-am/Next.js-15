"use client";
import { usePathname } from "next/navigation";

const NotFound = () => {
	const pathName = usePathname();

	const productId = pathName.split("/")[2];
	const reviewId = pathName.split("/")[4];

	return (
		<div>
			Review {reviewId} not found for product {productId}
		</div>
	);
};
export default NotFound;
