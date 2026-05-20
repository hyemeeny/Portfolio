'use client';

import { useState } from 'react';
import s from './Sidebar.module.scss';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import Nav from '@/components/Bar/Nav';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={s.sidebarContainer}>
      <p className={s.explorer}>EXPLORER</p>
      <h4 onClick={handleClick} className={s.dropDown}>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />} PORTFOLIO
      </h4>

      {isOpen && <Nav variant='sidebar' />}
    </nav>
  );
};

export default Sidebar;
