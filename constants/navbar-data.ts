export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Service", href: "/services" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Chauffuer Serivces", href: "/chauffuer" },
  { label: "Tours", href: "/tours" },
  { label: "Bus Coaches", href: "/bus-coaches" },
  { label: "Contact Us", href: "/contact" },
];
