"use client"

import { useTheme } from "next-themes"
import { FaRegMoon } from "react-icons/fa"
import { FiSun } from "react-icons/fi"

import { Button } from "@/components/ui/button"

export function DarkModeButton() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <FiSun className="transition-all dark:-rotate-90 dark:scale-0" />
      <FaRegMoon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
