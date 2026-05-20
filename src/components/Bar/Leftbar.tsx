'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import s from './Leftbar.module.scss';
import { VscFiles, VscSearch, VscSourceControl, VscExtensions, VscAccount, VscGear } from 'react-icons/vsc';

const Leftbar = () => {
  const pathname = usePathname();
  const isPublisher = pathname.startsWith('/publisher');
  const cleanPath = pathname.replace('/publisher', '') || '/';
  const getHref = (path: string) => (isPublisher ? `/publisher${path}` : path);

  return (
    <nav className={s.leftbar}>
      <ul>
        <li className={cleanPath === '/' ? s.active : ''}>
          <Link href={getHref('/')} aria-label='홈'>
            <VscFiles aria-hidden='true' />
          </Link>
        </li>

        <li className={cleanPath.startsWith('/about') ? s.active : ''}>
          <Link href={getHref('/about')} aria-label='소개'>
            <VscSearch aria-hidden='true' />
          </Link>
        </li>

        <li className={cleanPath.startsWith('/project') ? s.active : ''}>
          <Link href={getHref('/project')} aria-label='프로젝트'>
            <VscSourceControl aria-hidden='true' />
          </Link>
        </li>

        <li className={cleanPath.startsWith('/contact') ? s.active : ''}>
          <Link href={getHref('/contact')} aria-label='연락처'>
            <VscExtensions aria-hidden='true' />
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href='https://github.com/hyemeeny' target='_blank' rel='noopener noreferrer' aria-label='깃허브'>
            <VscAccount aria-hidden='true' />
          </Link>
        </li>

        <li className={cleanPath.startsWith('/setting') ? s.active : ''}>
          <Link href={getHref('/setting')} aria-label='설정'>
            <VscGear aria-hidden='true' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Leftbar;
