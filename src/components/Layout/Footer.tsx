import Link from "next/link";
import s from "./Footer.module.scss";

import { VscSourceControl, VscIssueReopened, VscError, VscWarning } from "react-icons/vsc";
import { VscEye, VscSymbolNamespace, VscCheckAll, VscBell } from "react-icons/vsc";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerWrap}>
        <Link href={"https://github.com/hyemeeny"} target={"_blank"} className={s.footerIcon} aria-label="깃허브">
          <VscSourceControl aria-hidden="true" />
          <p>main</p>
          <VscIssueReopened aria-hidden="true" />
        </Link>
        <Link href={"https://github.com/hyemeeny"} target={"_blank"} className={s.footerIcon} aria-label="깃허브">
          <VscError aria-hidden="true" />
          <p>0</p>
          <VscWarning aria-hidden="true" />
          <p>0</p>
        </Link>
      </div>

      <div className={s.footerWrap}>
        <Link href={"https://velog.io/@hyemeeny"} target={"_blank"} className={clsx(s.footerIcon, s.mobileHidden)} aria-label="Velog">
          <VscEye aria-hidden="true" />
          <p>Watch Sass</p>
        </Link>
        <Link href={"https://velog.io/@hyemeeny"} target={"_blank"} className={clsx(s.footerIcon, s.mobileHidden)} aria-label="Velog">
          <VscSymbolNamespace aria-hidden="true" />
          <p>TypeScript JSX</p>
        </Link>
        <Link href={"https://velog.io/@hyemeeny"} target={"_blank"} className={s.footerIcon} aria-label="Velog">
          <VscCheckAll aria-hidden="true" />
          <p>Prettier</p>
        </Link>
        <Link href={"https://velog.io/@hyemeeny"} target={"_blank"} className={s.footerIcon} aria-label="Velog">
          <VscBell aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
