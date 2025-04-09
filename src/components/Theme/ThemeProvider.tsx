"use client";

import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) return null;

  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
};

export default ThemeProvider;
