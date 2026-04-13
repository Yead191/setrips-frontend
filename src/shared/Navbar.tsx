import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopNav } from "@/components/desktop-nav";
import AuthModal from "@/features/(auth-pages)";
import { Button } from "../../ui/button";


export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-gray-200 shadow-md bg-white/80 backdrop-blur-md transition-all">
            <div className="container flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-90">
                    <Image
                        src="/logo.png"
                        alt="Setrips Logo"
                        width={140}
                        height={60}
                        className="h-auto w-[140px]"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <DesktopNav />

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <AuthModal
                            trigger={
                                <Button variant="outline" className="font-semibold px-6 border-primary text-primary hover:bg-primary hover:text-white transition-all transform active:scale-95">
                                    Sign In
                                </Button>
                            }
                        />
                    </div>

                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
