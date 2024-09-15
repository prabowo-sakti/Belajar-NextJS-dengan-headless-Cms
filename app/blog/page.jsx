import PostCard from "@/components/PostCard";
import Heading from "../../components/Header";
import { getAllPost } from "@/lib/getPost";

export const metadata = {
  title: "Blog Kumpulan Artikel",
  description:
    "kami menyediakan beberapa artikel berkualitas seputar teknologi, anime, dan coding",
};

export default async function BlogPage() {
  const posts = await getAllPost();
  return (
    <>
      <div className="overflow-y-auto">
        <Heading>Blog</Heading>
        <p className="text-sm mb-3">
          Ini adalah konten yang ditulis yang dilakukan dengan riset, jadi bisa
          di percaya ke orisinilan konten
        </p>

        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            img={post.image}
            href={`/blog/${post.slug}`}
            desc={post.desc}
            date={post.date}
            author={post.author}
          />
        ))}
      </div>
    </>
  );
}
