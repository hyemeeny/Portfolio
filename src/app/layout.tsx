import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_KR } from "next/font/google";
import clsx from "clsx";
import "@/styles/globals.scss";
import s from "./Home.module.scss";
import Navbar from "@/components/Bar/Navbar";
import Sidebar from "@/components/Bar/Sidebar";
import Header from "@/components/Layout/Header";
import Leftbar from "@/components/Bar/Leftbar";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const NotoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "프론트엔드 지혜민의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(NotoSansKR.className, JetBrainsMono.className)}>
        <Header />
        <div className={s.tabWrap}>
          <Leftbar />
          <Sidebar />
          <div className={s.mainWrap}>
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
