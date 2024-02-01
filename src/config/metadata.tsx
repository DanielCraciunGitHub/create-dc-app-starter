import { Metadata, Viewport } from "next"
import { siteConfig } from "@/config"

export const baseMetadata: Metadata = {
  title: "Title",
  description: "Description",
  icons: {
    icon: "/images/favicon.png",
  },
  keywords: [],
  openGraph: {
    title: "Title",
    description: "Description",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og.png`,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "alt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Title",
    description: "Description",
    images: [
      {
        url: `${siteConfig.url}/images/og.png`,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "alt",
      },
    ],
  },
  creator: "Your Name",
  category: "Your Category",
  applicationName: "App Name",
  manifest: `${siteConfig.url}/site.webmanifest`,
  metadataBase: new URL(siteConfig.url),
}
export const staticMetadata = {
  ...baseMetadata,
  // Write metadata for your pages
} satisfies Metadata

export const baseViewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "white",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "black",
    },
  ],
  colorScheme: "dark light",
}
