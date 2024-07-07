import Link from "next/link";
export default function Layout({ children }) {
  return (
    <html lang="eng">
      <head>
        <title>Belajar Next JS fundamental</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about-me">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
          <ul>
            <li>
              <Link href="/blog/latihan-route-next">Latihan Route Next</Link>
            </li>
            <li>
              <Link href="/blog/belajar-next">Belajar Next</Link>
            </li>
          </ul>
        </main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
