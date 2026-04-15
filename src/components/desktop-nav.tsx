"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/navbar-data";
import { cn } from "@/lib/utils";

import { ChevronDown } from "lucide-react";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        const isChildActive = item.children?.some(child => pathname === child.href);
        const isParentActive = isActive || isChildActive;

        return (
          <div key={item.href} className="relative group">
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-1 text-[15px] font-medium transition-all hover:text-primary hover:-translate-y-px relative",
                isParentActive ? "text-primary" : "text-foreground"
              )}
            >
              {item.label}
              {item.children && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all",
                  isParentActive ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>

            {item.children && (
              <div className="absolute left-[-60px] top-full hidden pt-4 group-hover:block z-50">
                <div className="w-[240px] rounded-md border-0 bg-white p-2 shadow-lg flex flex-col gap-1">
                  {item.children.map((child) => {
                    const childActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-sm px-4 py-2.5 text-sm transition-colors hover:bg-gray-100",
                          childActive ? "text-primary font-medium bg-gray-50" : "text-gray-700"
                        )}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
