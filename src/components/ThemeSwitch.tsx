// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (resolvedTheme === "dark") {
    return (
      <button
        className="rounded-2xl bg-white px-4 py-1 text-sm text-black"
        onClick={() => setTheme("light")}
      >
        Light Mode
      </button>
    );
  }
  return (
    <button
      className="rounded-2xl bg-black px-4 py-1 text-white"
      onClick={() => setTheme("dark")}
    >
      Dark Mode
    </button>
  );
}
