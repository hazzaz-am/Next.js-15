import { Metadata } from "next";

type PropsType = {
	params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
	params,
}: PropsType): Promise<Metadata> => {
	const { productId } = await params;
	const title = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(`iphone ${productId}`);
		}, 1000);
	});

	return {
		title: {
			absolute: `Product ${title}`,
		},
	};
};

export default async function ProductDetails({ params }: PropsType) {
	const { productId } = await params;

	return <div>ProductDetails of {productId}</div>;
}
