"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { NAV_ITEMS } from "@/constants/navbar-data";
import { Button } from "@/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/ui/sheet";
import { cn } from "@/lib/utils";
import AuthModal from "../features/(auth-pages)";

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
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary border-l-4 border-primary pl-2"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
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
