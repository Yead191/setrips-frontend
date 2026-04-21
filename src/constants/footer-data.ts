import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon, XIcon } from "@/components/brands";

export const FOOTER_SECTIONS = [
  {
    title: "Pages",
    links: [

      { label: "Our Fleet", href: "/fleet" },
      { label: "For Chauffeurs", href: "/services/chauffeur-service" },
      { label: "Airport Transportation", href: "/services/airport-transportation" },
      { label: "Tour Packages", href: "/services/tour-packages" },
      { label: "Bus & Coach", href: "/services/bus-coaches" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },

      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export const CONTACT_INFO = {
  address: "Office : 42 Marine Parade, Australia",
  email: "info@8pxlstudio.com",
  phone: "+0123456789",
};

export const SOCIAL_LINKS = [
  { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: TikTokIcon, href: "https://tiktok.com", label: "TikTok" },
  { icon: XIcon, href: "https://twitter.com", label: "X" },
];
