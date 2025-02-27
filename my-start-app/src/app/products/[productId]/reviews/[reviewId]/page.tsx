import { notFound } from "next/navigation";

const ReviewPage = async ({
	params,
}: {
	params: Promise<{ productId: string, reviewId: string }>;
}) => {
	const { reviewId, productId } = await params;

	if (Number(reviewId) > 1000) {
		//  redirect to notfound page
		return notFound();
	}

	return <div>Review {reviewId} for product {productId}</div>;
};
export default ReviewPage;
