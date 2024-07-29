import Heading from "@/components/Header";
import { getPost } from "@/lib/getPost";

export default async function PostPage({ params: { slug } }) {
  const post = await getPost(slug);

  return (
    <>
      <Heading>{post.title}</Heading>
      <p className="italic text-sm pb-2">
        <b>
          {post.date} - {post.author}
        </b>
      </p>
      <img src={post.image} alt="" />
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="prose"
      />
    </>
  );
}
