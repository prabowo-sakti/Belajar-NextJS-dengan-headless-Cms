import Heading from "../../components/Header";
import Link from "next/link";
export default function BlogPage() {
  return (
    <>
      <Heading>Blog</Heading>
      <p>list of posts</p>
      <ul>
        <li>
          <Link href="/blog/latihan-route-next">Latihan Route Next</Link>
        </li>
        <li>
          <Link href="/blog/belajar-next">Belajar Next</Link>
        </li>
      </ul>
    </>
  );
}
