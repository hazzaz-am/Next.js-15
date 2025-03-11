type AuthorProps = {
	userId: number;
	postId: number;
};

type Author = {
	name: string;
	email: string;
};

export default async function Author({ userId, postId }: AuthorProps) {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	);
	const author: Author = await response.json();

	return (
		<div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
			<div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
				{userId}
			</div>
			<div className="flex flex-col">
				<span className="text-sm font-medium text-gray-900 dark:text-white">
					{author.name}
				</span>
				<span className="text-xs text-gray-500 dark:text-gray-400">
					Post #{postId} • Author since 2024
				</span>
			</div>
		</div>
	);
}
