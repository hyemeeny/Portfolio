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
          <Link href="/">
            <VscFiles />
          </Link>
        </li>
        <li className={pathname.startsWith("/about") ? s.active : ""}>
          <Link href="/about">
            <VscSearch />
          </Link>
        </li>
        <li className={pathname.startsWith("/project") ? s.active : ""}>
          <Link href="/project">
            <VscSourceControl />
          </Link>
        </li>
        <li className={pathname.startsWith("/contact") ? s.active : ""}>
          <Link href="/contact">
            <VscExtensions />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="https://github.com/hyemeeny" target="_blank">
            <VscAccount />
          </Link>
        </li>
        <li className={pathname.startsWith("/setting") ? s.active : ""}>
          <Link href="/setting">
            <VscGear />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Leftbar;
