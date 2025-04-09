import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/styles/globals.scss";
import s from "@/styles/Home.module.scss";
import ThemeProvider from "@/components/Theme/ThemeProvider";
import Navbar from "@/components/Bar/Navbar";
import Sidebar from "@/components/Bar/Sidebar";
import Leftbar from "@/components/Bar/Leftbar";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ji Hyemin | Portfolio",
  description: "프론트엔드 개발자 지혜민의 포트폴리오입니다.",
  openGraph: {
    title: "Ji Hyemin | Portfolio",
    description: "프론트엔드 개발자 지혜민의 포트폴리오입니다.",
    images: [
      {
        url: "https://portfolio-jihyemin.vercel.app/opengraph-image.jpg",
        alt: "Jihyemin Portfolio Open Graph Image",
      },
    ],
    url: "https://portfolio-jihyemin.vercel.app",
    siteName: "Ji Hyemin | Portfolio",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.className}>
        <ThemeProvider>
          <Header />
          <div className={s.tabWrap}>
            <Leftbar />
            <Sidebar />
            <div className={s.mainWrap}>
              <Navbar />
              {children}
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
