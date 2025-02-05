import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "@/styles/globals.scss";
import s from "./Home.module.scss";
import NavTab from "@/components/Tab/NavTab";
import SideTab from "@/components/Tab/SideTab";
import Header from "@/components/Layout/Header";
import ManagementTab from "@/components/Tab/ManagementTab";

const SourceSans3 = Source_Sans_3({ subsets: ["latin"] });

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
      <body className={SourceSans3.className}>
        <Header />
        <div className={s.tabWrap}>
          <ManagementTab />
          <SideTab />
          <div className={s.mainWrap}>
            <NavTab />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
