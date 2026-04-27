export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Chauffeur Service", href: "/chauffeur-service" },
  { label: "Airport Transportation", href: "/airport-transportation" },
  { label: "Bus & Coaches", href: "/bus-coaches" },
  { label: "Tour Packages", href: "/tour-packages" },
  { label: "Our Fleet", href: "/fleet" },
  // { label: "Contact Us", href: "/contact" },
];
