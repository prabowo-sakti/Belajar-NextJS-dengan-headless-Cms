import matter from "gray-matter";
import { marked } from "marked";
import { Fahkwang } from "next/font/google";
import { readFile, readdir } from "node:fs/promises";
import qs from "qs";

const BACKEND_URL = "http://localhost:1337";

export async function getPost(slug) {
  // const text = await readFile(`content/blog/${slug}.md`, "utf-8");
  // const {
  //   content,
  //   data: { title, image, desc, date, author },
  // } = matter(text);
  // const body = marked(content);
  // return { slug, title, image, desc, author, date, author, body };
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        locale: "en",
        fields: ["slug", "title", "description", "publishedAt", "body"],
        populate: {
          createdBy: true,
          image: { fields: ["url"] },
        },
        pagination: { pageSize: 1, withCount: false },
      },
      { encodeValuesOnly: true }
    );

  const res = await fetch(url);
  const { data } = await res.json();
  const { attributes } = data[0];
  return {
    slug: attributes.slug,
    title: attributes.title,
    desc: attributes.description,
    body: marked(attributes.body, { headerIds: false }),
    author: attributes.createdBy,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: BACKEND_URL + attributes.image.data.attributes.url,
  };
}

export async function getAllPost() {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(
      {
        locale: "en",
        fields: ["slug", "title", "description", "publishedAt", "body"],
        populate: {
          createdBy: true,
          image: { fields: ["url"] },
        },
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 6 },
      },
      { encodeValuesOnly: true }
    );

  const res = await fetch(url);
  const { data } = await res.json();

  return data.map(({ attributes }) => ({
    slug: attributes.slug,
    title: attributes.title,
    desc: attributes.description,
    author: attributes.createdBy,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: BACKEND_URL + attributes.image.data.attributes.url,
  }));
}

export async function getSlugs() {
  const files = await readdir("./content/blog");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
