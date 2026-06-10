import Link from "next/link";
import { FOOTER_SECTIONS, CONTACT_INFO, SOCIAL_LINKS } from "@/constants/footer-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-black text-[#E6E6E6] pt-16 pb-8 px-4 md:px-6 lg:px-8 border-t border-white/10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-90">
                            <Image
                                src="/logo.png"
                                alt="Settrips Logo"
                                width={140}
                                height={60}
                                className="h-auto w-35 object-contain"
                                priority
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                        </Link>
                        <p className="text-sm md:text-base leading-relaxed max-w-sm">
                            Chauffeur a car with ease and confidence.
                            We offer a wide selection of vehicles, simple booking, and dependable service to make every journey enjoyable.
                        </p>
                    </div>

                    {/* Dynamic Links Grid */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        {FOOTER_SECTIONS.map((section) => (
                            <div key={section.title} className="flex flex-col gap-4">
                                <h3 className="text-white font-normal text-lg md:text-xl">{section.title}</h3>
                                <ul className="flex flex-col gap-3">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm md:text-lg hover:text-primary transition-colors duration-200"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact & Social Section */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white font-normal text-lg md:text-xl">Contact</h3>
                            <div className="flex flex-col gap-3 text-sm md:text-lg">
                                {/* Updated UK Address Here */}
                                <p>
                                    International House, 109-111 Fulham Palace Road,<br />
                                    London, England, W6 8JA
                                </p>
                                <p>Mail : <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary">{CONTACT_INFO.email}</a></p>
                                <p>Phone : <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary">{CONTACT_INFO.phone}</a></p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 p-2 rounded-md hover:bg-primary transition-all group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-center text-[#D5D5D5]">
                    <p>
                        Copyright © {new Date().getFullYear()} Settrips. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}