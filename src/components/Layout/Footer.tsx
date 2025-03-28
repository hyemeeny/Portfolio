import Link from "next/link";
import s from "./Footer.module.scss";

import { VscSourceControl, VscIssueReopened, VscError, VscWarning } from "react-icons/vsc";
import { VscEye, VscSymbolNamespace, VscCheckAll, VscBell } from "react-icons/vsc";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerWrap}>
        <Link href={"https://github.com/hyemeeny"} target={"_blank"} className={s.footerIcon}>
          <VscSourceControl />
          <p>main</p>
          <VscIssueReopened />
        </Link>
        <Link href={"https://github.com/hyemeeny"} target={"_blank"} className={s.footerIcon}>
          <VscError />
          <p>0</p>
          <VscWarning />
          <p>0</p>
        </Link>
      </div>

      <div className={s.footerWrap}>
        <Link href={"https://velog.io/@hyemeeny"} target={"_blank"} className={clsx(s.footerIcon, s.mobileHidden)}>
          <VscEye />
          <p>Watch Sass</p>
        </Link>
        <Link href={"https://velog.io/@hyemeeny"} target={"_blank"} className={clsx(s.footerIcon, s.mobileHidden)}>
          <VscSymbolNamespace />
          <p>TypeScript JSX</p>
        </Link>
        <Link href={"https://velog.io/@hyemeeny"} target={"_blank"} className={s.footerIcon}>
          <VscCheckAll />
          <p>Prettier</p>
        </Link>
        <Link href={"https://velog.io/@hyemeeny"} target={"_blank"} className={s.footerIcon}>
          <VscBell />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
