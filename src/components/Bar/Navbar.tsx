'use client';

import s from './Navbar.module.scss';
import Nav from '@/components/Bar/Nav';

const Navbar = () => {
  return (
    <nav className={s.navbarContainer}>
      <Nav variant='navbar' />
    </nav>
  );
};

export default Navbar;
