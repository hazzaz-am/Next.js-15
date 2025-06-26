const loadPosts = async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Post loaded successfully");
		}, 5000);
	});
};

export default async function Posts() {
	const posts = await loadPosts();
	return <div>{posts}</div>;
}
