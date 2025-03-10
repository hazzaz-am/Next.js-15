type Post = {
	userId: string;
	id: number;
	title: string;
	body: string;
};

type Album = {
	userId: number;
	id: number;
	title: string;
};

async function getUserPosts(userId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return response.json()
}

async function getUserAlbums(userId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  return response.json()
}

export default async function UserProfile({params}: {params: Promise<{id: string}>}) {
  const {id} = await params

  const postsData = getUserPosts(id)
  const albumsData = getUserAlbums(id)
  const [posts, albums] = await Promise.all([postsData, albumsData]) as [Post[], Album[]]
  
	return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-slate-800">User Profile #{id}</h1>
      <div className="grid grid-cols-2 gap-6">
        {/* Posts Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100"
              >
                <h3 className="text-xl font-medium mb-2 text-indigo-600">{post.title}</h3>
                <p className="text-slate-600">{post.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Albums Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">Albums</h2>
          <div className="space-y-2">
            {albums.map((album) => (
              <div 
                key={album.id} 
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100 hover:bg-slate-50"
              >
                <h3 className="text-lg font-medium text-indigo-600">{album.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
