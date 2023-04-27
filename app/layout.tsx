import Header from "@/components/header";
import "@/styles/reset.css";
import "@/styles/global.css";
import { Inter } from "next/font/google";
import StoreProvider from "@/store/store-provider";
import Head from "next/head";

export const metadata = {
  title: "MoviePool",
  description: "Movie Pool",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="container">
        <StoreProvider>
          <Header />
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
