"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/navbar-data";
import { cn } from "@/lib/utils";

import { ChevronDown } from "lucide-react";

interface DesktopNavProps {
  isScrolled?: boolean;
}

export function DesktopNav({ isScrolled = false }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6 2xl:gap-8">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        const isChildActive = item.children?.some(child => pathname === child.href);
        const isParentActive = isActive || isChildActive;

        return (
          <div key={item.href} className="relative group">
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-1 md:text-sm 2xl:text-[15px] transition-all hover:-translate-y-px relative",
                isParentActive 
                  ? (!isScrolled ? "text-white font-semibold" : "text-primary font-medium") 
                  : (!isScrolled ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary")
              )}
            >
              {item.label}
              {item.children && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] transition-all",
                  !isScrolled ? "bg-white" : "bg-primary",
                  isParentActive ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>

            {item.children && (
              <div className="absolute left-[-60px] top-full hidden pt-4 group-hover:block z-50">
                <div className={cn(
                  "w-[240px] rounded-md border border-white/10 p-2 shadow-lg flex flex-col gap-1 backdrop-blur-md transition-all",
                  !isScrolled ? "bg-black/40" : "bg-white/90"
                )}>
                  {item.children.map((child) => {
                    const childActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-sm px-4 py-2.5 text-sm transition-colors",
                          !isScrolled 
                            ? (childActive ? "text-white font-medium bg-white/20" : "text-gray-200 hover:bg-white/10 hover:text-white")
                            : (childActive ? "text-primary font-medium bg-gray-50" : "text-gray-700 hover:bg-gray-100")
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
