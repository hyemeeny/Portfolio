"use client";

import Link from "next/link";
import s from "./Home.module.scss";
import { Typewriter } from "react-simple-typewriter";
import Button from "@/components/Button/Button";

const Home = () => {
  return (
    <main className={s.mainPage}>
      <div className={s.homeTitleWrap}>
        <h1 className={s.homeTitle}>
          <Typewriter
            words={["Hello👋 Hyemin’s Portfolio!", "Welcome to Hyemin’s Portfolio!"]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <div className={s.buttonWrap}>
          <Button type="fill">
            <Link href="/about">About me</Link>
          </Button>
          <Button type="empty">
            <Link href="/contact">Contact me</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
