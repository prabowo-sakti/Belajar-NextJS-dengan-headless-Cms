import Heading from "@/components/Header";
import SharelinkButton from "@/components/ShareLinkButton";
import { getPost, getSlugs } from "@/lib/getPost";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
}

export default async function PostPage({ params: { slug } }) {
  const post = await getPost(slug);
  return (
    <>
      <Heading>{post.title}</Heading>

      <div className="flex justify-between items-baseline gap-3 pb-2">
        <p className="italic text-sm pb-2">
          <b>
            {post.date} - {post.author.firstname} {post.author.lastname}
          </b>
        </p>
        <SharelinkButton />
      </div>

      <Image width="600" height="400" src={post.image} alt="" />
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="prose"
      />
    </>
  );
}
