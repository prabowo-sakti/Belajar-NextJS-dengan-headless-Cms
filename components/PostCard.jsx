import Image from "next/image";
import Link from "next/link";
export default function PostCard({ title, href, desc, date, author, img }) {
  return (
    <div className="flex flex-wrap hover:bg-slate-100 overflow-y-hidden">
      <Link href={href}>
        <divs className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
          <div className="relative mb-6 overflow-hidden rounded-lg bg-cove bg-no-repeat shadow-lg">
            <Image src={img} width={300} height={200} className="w-full" />

            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
          </div>
        </divs>
      </Link>

      <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12  ">
        <Link href={href}>
          <h5 className="text-lg font-bold leading-none mb-2 ">{title}</h5>
        </Link>

        <p>
          <small>
            Published <u>{date}</u> by {""}
            <a href="#!">
              {author.firstname} {author.lastname}
            </a>
          </small>
        </p>
        <p className="text-gray-800">{desc}</p>
      </div>
    </div>
  );
}
