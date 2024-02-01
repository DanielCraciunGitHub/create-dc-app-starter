import { NavItem, SocialLink } from "@/types"
import { Facebook, Twitter } from "lucide-react"

export const siteConfig = {
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://example.com",
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
  ] satisfies NavItem[],
  socialLinks: [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: <Facebook className="text-blue-600" />,
    },
    {
      name: "Twitter",
      href: "https://x.com",
      icon: <Twitter className="text-blue-600" />,
    },
  ] satisfies SocialLink[],
} as const
