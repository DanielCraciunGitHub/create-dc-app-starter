import { siteConfig } from "@/config"

import { DarkModeButton } from "@/components/DarkModeButton"
import SocialLink from "@/components/SocialLink"

export const Footer = () => (
  <footer className="p-4 z-20">
    <div className="flex sm:justify-between">
      <div className="space-x-3 flex">
        {siteConfig.socialLinks.map((socialLink) => (
          <SocialLink key={socialLink.href} {...socialLink} />
        ))}
      </div>
      <div className="flex w-full flex-col space-y-3">
        <div className="flex justify-end">
          <DarkModeButton />
        </div>
        <span className="text-sm text-foreground/50 text-end">
          © 2024 My Website. All Rights Reserved
        </span>
      </div>
    </div>
  </footer>
)
