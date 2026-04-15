"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { NAV_ITEMS } from "@/constants/navbar-data";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../ui/sheet";
import { cn } from "@/lib/utils";
import AuthModal from "../features/(auth-pages)";
import { Button } from "../../ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left text-primary font-bold text-2xl">
            Setrips
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const isChildActive = item.children?.some(child => pathname === child.href);
            const isParentActive = isActive || isChildActive;
            
            return (
              <div key={item.href} className="flex flex-col">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary py-1",
                    isParentActive
                      ? "text-primary border-l-4 border-primary pl-2"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="flex flex-col ml-4 mt-2 mb-2 gap-3 border-l-2 border-muted pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "text-base transition-colors hover:text-primary",
                          pathname === child.href ? "text-primary font-medium" : "text-muted-foreground"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <hr className="my-4 border-muted" />
          <AuthModal
            trigger={
              <Button
                className="w-full text-lg h-12"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Button>
            }
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
