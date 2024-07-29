import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex  gap-2">
        <li>
          <Link className="text-gray-800 hover:underline font-roboto" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-800 hover:underline font-roboto"
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-800 hover:underline font-roboto"
            href="/about-me"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            prefetch={false}
            className="text-gray-800 hover:underline font-roboto"
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
