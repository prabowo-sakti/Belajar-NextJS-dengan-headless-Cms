import Heading from "../../components/Header";
import Link from "next/link";
export default function BlogPage() {
  return (
    <>
      <Heading>Blog</Heading>
      <p className="text-2xl mb-3">list of posts</p>
      <Link href="/blog/belajar-next">
        <div className="flex flex-wrap">
          <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
            <div className="relative mb-6 overflow-hidden rounded-lg bg-cove bg-no-repeat shadow-lg">
              <img src="/img/skyscrapers.jpg" className="w-full" />
              <Link href="/blog/belajar-next">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </Link>
            </div>
          </div>
          <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <h5 className="text-lg font-bold">Belajar NextJS</h5>
            <p>
              <small>
                Published <u>13.01.2022</u> by {""}
                <a href="#!">Admin</a>
              </small>
            </p>
            <p className="text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              blanditiis maiores vel dolorum temporibus itaque vero error, ipsum
              dignissimos optio, maxime accusantium illo alias. Ipsa earum at
              quia, libero deserunt placeat molestias esse ullam laudantium
              ipsum consequuntur cupiditate cum ea deleniti iusto optio nulla
              quam sunt qui. Fugiat, numquam dolorem?
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
