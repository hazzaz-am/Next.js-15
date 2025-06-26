import Link from "next/link";
import { blogs } from "../data/blogs";
import BlogItem from "../components/BlogItem";

export default function BlogsPage() {
	return (
		<div>
			<h1 className="text-2xl text-red-600">
				Blogs Page - This is a static page that does not fetch data from the
				server.
			</h1>
			{blogs.map((blog) => (
				<Link key={blog.id} href={`/blogs/${blog.id}`}>
					<BlogItem title={blog.title} />
				</Link>
			))}
		</div>
	);
}
