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
      <div className="flex flex-wrap">
        <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
          <div className="relative mb-6 overflow-hidden rounded-lg bg-cove bg-no-repeat shadow-lg">
            <img src="/img/skyscrapers.jpg" className="w-full" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0,0,0)]"></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
