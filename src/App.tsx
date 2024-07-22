import BlogPosts, { BlogPost } from './components/BlogPosts'
import useFetch from './utils/useFetch'

type DataBlogPost = {
  id: number
  title: string
  body: string
  userId: number
}

function App() {
  const { data, err } = useFetch<DataBlogPost[]>(
    'https://jsonplaceholder.typicode.com/posts'
  )
  if (err || !data) {
    return <h1>Loading...</h1>
  }

  const blogPosts: BlogPost[] = data
    ?.map((post) => ({
      id: post?.id,
      title: post?.title,
      text: post?.body
    }))
    .slice(0, 10)

  return (
    <main>
      <BlogPosts posts={blogPosts} />
    </main>
  )
}

export default App
