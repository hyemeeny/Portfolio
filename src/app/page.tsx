"use client";

import Link from "next/link";
import s from "@/styles/Home.module.scss";
import { Typewriter } from "react-simple-typewriter";
import { VscVscode } from "react-icons/vsc";
import Container from "@/components/Layout/Container";
import Button from "@/components/Button/Button";

const Home = () => {
  return (
    <Container>
      <main className={s.mainPage}>
        <VscVscode className={s.vsCodeImg} />
        <div className={s.homeTitleWrap}>
          <h1 className={s.homeTitle}>
            <Typewriter
              words={["Hello👋 Hyemin's world!", "Welcome Hyemin's portfolio!"]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className={s.homeSubTitle}>I&apos;m Frontend Developer</p>
          <div className={s.buttonWrap}>
            <Button type="fill">
              <Link href="/project">View Works</Link>
            </Button>
            <Button type="empty">
              <Link href="/about">About me</Link>
            </Button>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Home;
