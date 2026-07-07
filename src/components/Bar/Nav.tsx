import Link from 'next/link';
import { useRef } from 'react';
import { navItems } from '@/data/navData';
import { usePathname } from 'next/navigation';
import s from './Nav.module.scss';

const Nav = ({ variant }: { variant: 'sidebar' | 'navbar' }) => {
  const tabRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const pathname = usePathname();
  const isPublisher = pathname.startsWith('/publisher');
  const cleanPath = pathname.replace('/publisher', '') || '/';
  const getHref = (path: string) => (isPublisher ? `/publisher${path}` : path);

  const handleTabClick = (path: string) => {
    const target = tabRefs.current[path];

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  return (
    <ul className={s[variant]}>
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <li
            key={item.path}
            className={cleanPath === item.path ? s.active : ''}
            ref={(el) => {
              tabRefs.current[item.path] = el;
            }}
            onClick={() => handleTabClick(item.path)}
          >
            <Link href={getHref(item.path)}>
              <Icon className={s[item.iconClass]} />
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
