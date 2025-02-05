import { VscVscode } from "react-icons/vsc";
import s from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <section className={s.header}>
      <VscVscode className={s.vsCodeIcon} />
      <ul className={s.headerTitle}>
        <li>
          <Link href="/">File</Link>
        </li>
        <li>
          <Link href="/">Edit</Link>
        </li>
        <li>
          <Link href="/">View</Link>
        </li>
        <li>
          <Link href="/">Go</Link>
        </li>
        <li>
          <Link href="/">Run</Link>
        </li>
        <li>
          <Link href="/">Terminal</Link>
        </li>
        <li>
          <Link href="/">Help</Link>
        </li>
      </ul>
    </section>
  );
};

export default Header;
