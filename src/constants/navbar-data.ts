export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/home" },
  {
    label: "Our Service",
    href: "#",
    children: [
      { label: "Chauffeur Service", href: "/services/chauffeur-service" },
      { label: "Airport Transportation", href: "/services/airport-transportation" },
      { label: "Bus & Coaches", href: "/services/bus-coaches" },
      { label: "Tour Packages", href: "/services/tour-packages" },
    ]
  },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Contact Us", href: "/contact" },
];
