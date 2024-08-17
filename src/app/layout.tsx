import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@components/Navbar";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AM Fernandes",
  description:
    "Compromisso com grandes sonhos e realizações. Veja os princípios e objetivos da AM Fernandes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
        <NavBar />
        <main className="flex flex-grow w-full pb-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
