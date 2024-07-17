import Heading from "@/components/Header";
import { marked } from "marked";
import { readFile } from "node:fs/promises";

export default async function PostPage() {
  const text = await readFile("content/belajar-nextJS.md", "utf-8");
  const html = marked(text);
  return (
    <>
      <Heading>Belajar Next.js</Heading>
      <img src="/img/image.jpeg" alt="" />
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
