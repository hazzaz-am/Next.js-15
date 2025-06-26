import { blogs } from "@/app/data/blogs";

export function generateStaticParams() {
	return blogs.map((blog) => ({
		id: blog.id,
	}));
}

export default function BlogDetails({ params }) {
	console.log("blog details rendering");
	const { id } = params;
	const blog = blogs.find((blog) => blog.id === id);
	const { title, content } = blog;

	return (
		<div className="p-8">
			<h1 className="text-xl font-blod">{title}</h1>
			<p className="mt-6">{content}</p>
		</div>
	);
}
