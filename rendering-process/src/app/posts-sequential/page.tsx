import PostCard from '../../components/PostCard'

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function PostsSequential() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json()

  const filteredPosts = posts.filter(post => post.id % 10 === 1)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Filtered Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            {...post}
          />
        ))}
      </div>
    </div>
  )
}