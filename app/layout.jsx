import "./globals.css";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <html lang="eng">
      <head>
        <title>Belajar Next JS fundamental</title>
      </head>
      <body className="flex flex-col px-4 py-4 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center text-xs">[footer]</footer>
      </body>
    </html>
  );
}
