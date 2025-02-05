"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import s from "./SideTab.module.scss";
import { FaReact, FaHtml5, FaJs, FaSass } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const SideTab = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={s.sideTab}>
      <p className={s.explorer}>EXPLORER</p>
      <h4 onClick={handleClick} className={s.dropDown}>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />} PORTFOLIO
      </h4>
      {isOpen && (
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
        </ul>
      )}
    </nav>
  );
};

export default SideTab;
