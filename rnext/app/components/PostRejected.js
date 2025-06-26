const cancelPosts = async () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject(new Error("Post loading cancelled"));
		}, 1000);
	});
};

export default async function PostRejected() {
	try {
		await cancelPosts();
	} catch (error) {
		return <div className="text-red-500">Error: {error.message}</div>;
	}
	return <div>Post loading was successful</div>;
}
