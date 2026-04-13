"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/navbar-data";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-[15px] font-medium transition-all hover:text-primary hover:translate-y-[-1px] relative group",
              isActive ? "text-primary" : "text-foreground"
            )}
          >
            {item.label}
            <span
              className={cn(
                "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all",
                isActive ? "w-full" : "w-0 group-hover:w-full"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
