import { Suspense } from "react";
import Posts from "../../components/Posts";
import PostRejected from "../../components/PostRejected";

export default function PostsPage() {
	return (
		<div>
			<h2>This is post page</h2>
			<Suspense fallback={<div>Loading posts...</div>}>
				<Posts />
			</Suspense>
			<PostRejected />
		</div>
	);
}
