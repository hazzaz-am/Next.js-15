export async function generateStaticParams() {
	return [
		{
			id: "1",
		},
		{
			id: "2",
		},
		{
			id: "3",
		},
	];
}

const ProductDetailsPage = async ({
	params,
}: {
	params: Promise<{ id: string }>;
}) => {
	const { id } = await params;
	return (
		<div>
			Product {id} details rendered at {new Date().toLocaleTimeString()}
		</div>
	);
};
export default ProductDetailsPage;
