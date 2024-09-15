import { marked } from "marked";
import qs from "qs";

const BACKEND_URL = "http://localhost:1337";

export async function getPost(slug) {
  const { data } = await fetchPos({
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
  });
  const { attributes } = data[0];
  return {
    ...toPost({ attributes }),
    body: marked(attributes.body, { headerIds: false }),
  };
}

export async function getAllPost() {
  const { data } = await fetchPos({
    locale: "en",
    fields: ["slug", "title", "description", "publishedAt", "body"],
    populate: {
      createdBy: true,
      image: { fields: ["url"], populate: "*" },
    },
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 6 },
  });

  return data.map(toPost);
}

export async function getSlugs() {
  const { data } = await fetchPos({
    locale: "en",
    fields: ["slug"],
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 100 },
  });
  console.log(data);
  return data.map(({ attributes }) => attributes.slug);
}

async function fetchPos(parameters) {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(parameters, { encodeValuesOnly: true });

  const res = await fetch(url);
  return await res.json();
}

function toPost({ attributes }) {
  return {
    slug: attributes.slug,
    title: attributes.title,
    desc: attributes.description,
    author: attributes.createdBy,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: BACKEND_URL + attributes.image.data.attributes.url,
  };
}
