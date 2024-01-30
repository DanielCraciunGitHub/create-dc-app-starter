import { NavItem } from "@/types"

export const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "[[url-here]]"

export const siteConfig = {
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "[[url-here]]",
  navLinks: [
    {
      name: "Main",
      href: "/",
    },
    {
      name: "Navitem1",
      href: "/Navitem1",
    },
    {
      name: "Navitem2",
      href: "/Navitem2",
    },
    {
      name: "Navitem3",
      href: "/Navitem3",
    },
  ] as const satisfies NavItem[],
}
