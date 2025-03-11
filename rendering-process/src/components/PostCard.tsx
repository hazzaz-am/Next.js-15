import Author from "@/app/posts-sequential/author";
import { FC, Suspense } from "react";

type PostCardProps = {
	title: string;
	body: string;
	userId: number;
	id: number;
};

const PostCard: FC<PostCardProps> = ({ title, body, userId, id }) => {
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
			<div className="p-6">
				<div className="flex items-center justify-between mb-4">
					<span className="text-sm text-gray-500 dark:text-gray-400">
						User #{userId}
					</span>
					<span className="text-sm text-gray-500 dark:text-gray-400">
						Post #{id}
					</span>
				</div>
				<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 line-clamp-2 capitalize">
					{title}
				</h3>
				<p className="text-gray-600 dark:text-gray-300 line-clamp-3 capitalize">
					{body}
				</p>
				<div className="mt-4">
					<button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
						Read More →
					</button>
				</div>
				<Suspense fallback={<p className="mt-4">Loading User...</p>}>
					<Author userId={userId} postId={id} />
				</Suspense>
			</div>
		</div>
	);
};

export default PostCard;
