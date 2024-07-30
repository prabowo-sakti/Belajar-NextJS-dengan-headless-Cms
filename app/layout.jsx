import "./globals.css";
import Navbar from "../components/Navbar";
import { roboto } from "./fonts";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Prabowo Sakti",
    template: "%s | Prabowo Sakti",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="eng" className={roboto.variable}>
      <head></head>
      <body className="flex flex-col px-4 py-4 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
