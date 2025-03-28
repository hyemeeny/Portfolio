import { VscVscode } from "react-icons/vsc";
import s from "./Header.module.scss";
import Link from "next/link";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.titleWrap}>
        <VscVscode className={s.vsCodeIcon} />
        <ul className={s.title}>
          <li>
            <Link href="/">File</Link>
          </li>
          <li>
            <Link href="/">Edit</Link>
          </li>
          <li>
            <Link href="/">Selection</Link>
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
      </div>
      <p className={s.name}>Ji Hyemin - Visual Studio Code</p>
      <div className={s.dotWrap}>
        <span className={clsx(s.dot, s.red)}></span>
        <span className={clsx(s.dot, s.yellow)}></span>
        <span className={clsx(s.dot, s.green)}></span>
      </div>
    </header>
  );
};

export default Header;
