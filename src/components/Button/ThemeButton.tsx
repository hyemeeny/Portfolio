"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { ReactNode } from "react";
import s from "./ThemeButton.module.scss";

interface ThemeButtonProps {
  themeKey: string;
  children: ReactNode;
}

const ThemeButton = ({ themeKey, children }: ThemeButtonProps) => {
  const { theme, setTheme } = useTheme();

  const isActive = theme === themeKey;

  return (
    <button
      onClick={() => setTheme(themeKey)}
      className={clsx(s.themeButton, isActive && s.active)}
      aria-pressed={isActive}
      aria-label={`Set theme to ${themeKey}`}
    >
      {children}
    </button>
  );
};

export default ThemeButton;
