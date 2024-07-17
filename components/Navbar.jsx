import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex  gap-2">
        <li>
          <Link className="text-gray-800 hover:underline" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-gray-800 hover:underline" href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="text-gray-800 hover:underline" href="/about-me">
            About
          </Link>
        </li>
        <li>
          <Link
            prefetch={false}
            className="text-gray-800 hover:underline"
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
