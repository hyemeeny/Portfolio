'use client';

import { usePathname } from 'next/navigation';
import { VscVscode } from 'react-icons/vsc';
import s from './Header.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

const Header = () => {
  const pathname = usePathname();
  const homeHref = pathname.startsWith('/publisher') ? '/publisher' : '/';

  return (
    <header className={s.header}>
      <div className={s.titleWrap}>
        <Link href={homeHref} aria-label='홈으로 이동'>
          <VscVscode className={s.vsCodeIcon} aria-hidden='true' />
        </Link>

        <ul className={s.title}>
          <li>
            <Link href={homeHref}>File</Link>
          </li>
          <li>
            <Link href={homeHref}>Edit</Link>
          </li>
          <li>
            <Link href={homeHref}>Selection</Link>
          </li>
          <li>
            <Link href={homeHref}>View</Link>
          </li>
          <li>
            <Link href={homeHref}>Go</Link>
          </li>
          <li>
            <Link href={homeHref}>Run</Link>
          </li>
          <li>
            <Link href={homeHref}>Terminal</Link>
          </li>
          <li>
            <Link href={homeHref}>Help</Link>
          </li>
        </ul>
      </div>

      <p className={s.name}>Ji Hyemin - Visual Studio Code</p>

      <div className={s.dotWrap} aria-hidden='true'>
        <span className={clsx(s.dot, s.red)}></span>
        <span className={clsx(s.dot, s.yellow)}></span>
        <span className={clsx(s.dot, s.green)}></span>
      </div>
    </header>
  );
};

export default Header;
