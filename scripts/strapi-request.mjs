import { writeFileSync } from "fs";
import qs from "qs";

const url =
  "http://localhost:1337/api/posts" +
  "?" +
  qs.stringify(
    {
      filters: {
        slug: {
          $eq: "apa-itu-proses-diffing",
        },
      },
      locale: "en",
      fields: ["slug", "title", "description", "publishedAt", "body"],
      populate: {
        createdBy: true,
        image: { fields: ["url"] },
      },
      sort: ["publishedAt:desc"],
      pagination: { pageSize: 1, withCount: false },
    },
    { encodeValuesOnly: true }
  );

const res = await fetch(url);
const body = await res.json();
const posts = JSON.stringify(body, null, 2);

const file = "scripts/strapi-response.json";

writeFileSync(file, posts, "utf8");
