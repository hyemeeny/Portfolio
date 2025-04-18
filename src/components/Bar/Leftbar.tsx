"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import s from "./Leftbar.module.scss";
import { VscFiles, VscSearch, VscSourceControl, VscExtensions, VscAccount, VscGear } from "react-icons/vsc";

const Leftbar = () => {
  const pathname = usePathname();

  return (
    <nav className={s.leftbar}>
      <ul>
        <li className={pathname === "/" ? s.active : ""}>
          <Link href="/" aria-label="홈">
            <VscFiles aria-hidden="true" />
          </Link>
        </li>
        <li className={pathname.startsWith("/about") ? s.active : ""}>
          <Link href="/about" aria-label="소개">
            <VscSearch aria-hidden="true" />
          </Link>
        </li>
        <li className={pathname.startsWith("/project") ? s.active : ""}>
          <Link href="/project" aria-label="프로젝트">
            <VscSourceControl aria-hidden="true" />
          </Link>
        </li>
        <li className={pathname.startsWith("/contact") ? s.active : ""}>
          <Link href="/contact" aria-label="연락처">
            <VscExtensions aria-hidden="true" />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="https://github.com/hyemeeny" target="_blank" rel="noopener noreferrer" aria-label="깃허브">
            <VscAccount />
          </Link>
        </li>
        <li className={pathname.startsWith("/setting") ? s.active : ""}>
          <Link href="/setting" aria-label="설정">
            <VscGear aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Leftbar;
