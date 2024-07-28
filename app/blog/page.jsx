import PostCard from "@/components/PostCard";
import Heading from "../../components/Header";
import { getAllPost } from "@/lib/getPost";

export default async function BlogPage() {
  const posts = await getAllPost();
  console.log(posts);
  return (
    <>
      <Heading>Blog</Heading>
      <p className="text-2xl mb-3"></p>

      {posts.map((post) => (
        <PostCard
          title={post.title}
          img={post.image}
          href={`/blog/${post.slug}`}
          desc={post.desc}
          date={post.date}
          author={post.author}
        />
      ))}
    </>
  );
}
