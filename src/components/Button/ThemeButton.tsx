"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import s from "./ThemeButton.module.scss";

interface ThemeButtonProps {
  themeKey: string;
  children: ReactNode;
}

const ThemeButton = ({ themeKey, children }: ThemeButtonProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isActive = theme === themeKey;

  return (
    <button onClick={() => setTheme(themeKey)} className={clsx(s.themeButton, isActive && s.active)}>
      {children}
    </button>
  );
};

export default ThemeButton;
