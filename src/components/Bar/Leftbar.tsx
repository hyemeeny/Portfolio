"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import s from "./Leftbar.module.scss";
import { IoDocumentsOutline, IoSearch, IoGitBranchOutline } from "react-icons/io5";
import { MdOutlineWidgets } from "react-icons/md";

const Leftbar = () => {
  const pathname = usePathname();

  return (
    <nav className={s.leftbar}>
      <ul>
        <li className={pathname === "/" ? s.active : ""}>
          <Link href="/">
            <IoDocumentsOutline />
          </Link>
        </li>
        <li className={pathname.startsWith("/about") ? s.active : ""}>
          <Link href="/about">
            <IoSearch />
          </Link>
        </li>
        <li className={pathname.startsWith("/project") ? s.active : ""}>
          <Link href="/project">
            <IoGitBranchOutline />
          </Link>
        </li>
        <li className={pathname.startsWith("/contact") ? s.active : ""}>
          <Link href="/contact">
            <MdOutlineWidgets />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Leftbar;
