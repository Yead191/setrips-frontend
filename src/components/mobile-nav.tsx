"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User, History, Trash2, LogOut, ChevronDown } from "lucide-react";
import Image from "next/image";

import { NAV_ITEMS } from "@/constants/navbar-data";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../ui/sheet";
import { cn } from "@/lib/utils";
import AuthModal from "../features/(auth-pages)";
import { Button } from "../../ui/button";
import { useAuth } from "@/lib/hooks/use-auth";
import { DeleteProfileModal } from "@/shared/DeleteProfileModal";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const pathname = usePathname();
  const { isLoggedIn, logout } = useAuth();

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-75 sm:w-100 flex flex-col">
          <SheetHeader>
            <SheetTitle className="text-left">
              <Link href="/" onClick={() => setOpen(false)} className="inline-block cursor-pointer transition-opacity hover:opacity-90">
                <Image
                  src="/logo.png"
                  alt="Setrips Logo"
                  width={120}
                  height={50}
                  className="h-auto w-30"

                />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-3 py-6 pr-2">
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
                      "text-lg font-medium transition-colors hover:text-primary py-1.5",
                      isParentActive
                        ? "text-primary border-l-4 border-primary pl-3"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="flex flex-col ml-4 mt-1 mb-1 gap-2.5 border-l-2 border-slate-100 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "text-sm tracking-wide transition-colors hover:text-primary",
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

            <div className="mt-4 pt-6 border-t border-gray-100">
              {isLoggedIn ? (
                <div className="space-y-3">
                  {/* Profile Toggle Header */}
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-all border border-gray-50 bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-100">
                        <Image src="/user.jpg" alt="Profile" fill className="object-cover" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900 leading-tight">My Account</p>
                        <p className="text-xs text-gray-500">Manage settings</p>
                      </div>
                    </div>
                    <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform duration-300", profileOpen && "rotate-180")} />
                  </button>

                  {/* Profile Links */}
                  <div className={cn(
                    "grid transition-all duration-300 ease-in-out overflow-hidden bg-gray-50/50 rounded-xl",
                    profileOpen ? "grid-rows-[1fr] opacity-100 py-1" : "grid-rows-[0fr] opacity-0"
                  )}>
                    <div className="overflow-hidden flex flex-col">
                      <ProfileLink href="/profile" icon={<User className="w-4 h-4" />} label="Profile Settings" onClick={() => setOpen(false)} />
                      <ProfileLink href="/booking-history" icon={<History className="w-4 h-4" />} label="Booking History" onClick={() => setOpen(false)} />
                      <div className="h-px bg-gray-100 my-1 mx-3" />
                      <button
                        onClick={() => setIsDeleteModalOpen(true)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete Account
                      </button>
                      <button
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <AuthModal
                  trigger={
                    <Button className="w-full text-lg h-12 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/10">
                      Sign In
                    </Button>
                  }
                />
              )}
            </div>
          </div>

        </SheetContent>
      </Sheet>

      <DeleteProfileModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
}

const ProfileLink = ({ href, icon, label, onClick }: { href: string; icon: React.ReactNode; label: string; onClick: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-white hover:text-primary transition-all rounded-lg mx-1"
  >
    <div className="text-gray-400 group-hover:text-primary">{icon}</div>
    {label}
  </Link>
);

