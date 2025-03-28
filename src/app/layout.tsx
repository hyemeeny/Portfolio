import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/styles/globals.scss";
import s from "@/styles/Home.module.scss";
import Navbar from "@/components/Bar/Navbar";
import Sidebar from "@/components/Bar/Sidebar";
import Header from "@/components/Layout/Header";
import Leftbar from "@/components/Bar/Leftbar";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "지혜민의 Portfolio",
  description: "프론트엔드 개발자 지혜민의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.className}>
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
