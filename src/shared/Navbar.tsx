"use client";
import { useAuth } from "@/lib/hooks/use-auth";
import { UserNav } from "./UserNav";
import Link from "next/link";
import Image from "next/image";
import { DesktopNav } from "@/components/desktop-nav";
import { User } from "lucide-react";
import AuthModal from "@/features/(auth-pages)";
import { Button } from "../../ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const { isLoggedIn } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);
    const isManualScrolling = useRef(false);
    const lastScrollTop = useRef(0);

    // ── Scroll spy + hide-on-scroll-down ──────────────────────────────────────
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;

            // Background swap (Always run this, even during manual scroll)
            setIsScrolled(scrollY > bannerHeight - 67);

            if (isManualScrolling.current) return;

            lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // ── Styles ─────────────────────────────────────────────────────────────────
    const navBase =
        "fixed top-0 z-40 w-full   transition-all duration-500";

    const navBg = isScrolled
        ? "bg-white backdrop-blur-sm border-gray-200 shadow-md backdrop-blur-md"
        : "bg-transparent ";



    return (
        <header className={`${navBase} ${navBg}`}>
            <div className="container flex h-16 lg:h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-90">
                    <Image
                        src="/logo.png"
                        alt="Setrips Logo"
                        width={140}
                        height={60}
                        className="h-fit w-32 lg:w-40 transition-all duration-300 object-contain"
                        style={{ filter: !isScrolled ? 'brightness(0) invert(1)' : 'none' }}
                    />
                </Link>

                {/* Right side navigation and actions */}
                <div className="flex items-center gap-8">
                    {/* Desktop Navigation */}
                    <DesktopNav isScrolled={isScrolled} />

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            {isLoggedIn ? (
                                <UserNav />
                            ) : (
                                <AuthModal
                                    trigger={
                                        <Button
                                            variant="outline"
                                            className={`font-medium px-6 rounded-full transition-all transform active:scale-95 flex items-center gap-2
                                                ${!isScrolled
                                                    ? 'border-none text-white hover:bg-white/10 hover:text-white bg-white/20'
                                                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                                                }`}
                                        >
                                            <User className="w-4 h-4" />
                                            Sign in
                                        </Button>
                                    }
                                />
                            )}
                        </div>

                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
}
