"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import s from "./Navbar.module.scss";
import { FaReact, FaHtml5, FaJs, FaSass } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={s.navbar}>
      <ul>
        <li className={pathname === "/" ? s.active : ""}>
          <Link href="/">
            <FaReact className={s.reactIcon} /> home.tsx
          </Link>
        </li>
        <li className={pathname.startsWith("/about") ? s.active : ""}>
          <Link href="/about">
            <FaHtml5 className={s.htmlIcon} /> about.html
          </Link>
        </li>
        <li className={pathname.startsWith("/project") ? s.active : ""}>
          <Link href="/project">
            <FaJs className={s.jsIcon} /> project.js
          </Link>
        </li>
        <li className={pathname.startsWith("/contact") ? s.active : ""}>
          <Link href="/contact">
            <FaSass className={s.scssIcon} /> contact.scss
          </Link>
        </li>
        <li className={pathname.startsWith("/setting") ? s.active : ""}>
          <Link href="/setting">
            <VscJson className={s.jsonIcon} /> setting.json
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
