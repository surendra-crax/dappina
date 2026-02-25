"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const servicesDropdown = [
    { name: "Indian Practice", href: "/services/india" },
    { name: "U.S. Outsourcing Services", href: "/services/us" },
];

const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Industries", href: "/industries" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setServicesOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white shadow-md py-3"
                    : "bg-white py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <img src="https://images.seeklogo.com/logo-png/51/2/ca-india-logo-png_seeklogo-513934.png" alt="CA India Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                                DAPPINA & CO.
                            </span>
                            <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                                Chartered Accountants
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className={cn("text-sm font-medium hover:text-primary transition-colors", pathname === "/" ? "text-primary" : "text-gray-700")}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={cn("text-sm font-medium hover:text-primary transition-colors", pathname === "/about" ? "text-primary" : "text-gray-700")}
                        >
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <button
                                className={cn(
                                    "flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors py-2",
                                    pathname.includes("/services") ? "text-primary" : "text-gray-700"
                                )}
                            >
                                <span>Services</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 mt-0 w-56 bg-white shadow-lg border border-gray-100 rounded-md overflow-hidden"
                                    >
                                        <div className="py-2">
                                            {servicesDropdown.map((service) => (
                                                <Link
                                                    key={service.href}
                                                    href={service.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/leadership"
                            className={cn("text-sm font-medium hover:text-primary transition-colors", pathname === "/leadership" ? "text-primary" : "text-gray-700")}
                        >
                            Leadership
                        </Link>
                        <Link
                            href="/industries"
                            className={cn("text-sm font-medium hover:text-primary transition-colors", pathname === "/industries" ? "text-primary" : "text-gray-700")}
                        >
                            Industries
                        </Link>
                        <Link
                            href="/resources"
                            className={cn("text-sm font-medium hover:text-primary transition-colors", pathname === "/resources" ? "text-primary" : "text-gray-700")}
                        >
                            Resources
                        </Link>
                    </nav>

                    {/* Contact Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-opacity-90 transition-colors shadow-sm"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-xl flex flex-col pt-20 px-6 pb-6 overflow-y-auto"
                        >
                            <button
                                className="absolute top-6 right-6 p-2 text-gray-500 hover:text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex flex-col space-y-4">
                                {mainLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-3"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="pt-2">
                                    <span className="text-lg font-medium text-gray-800 block mb-3">Our Services</span>
                                    <div className="flex flex-col space-y-3 pl-4 border-l-2 border-primary/20">
                                        {servicesDropdown.map((service) => (
                                            <Link
                                                key={service.href}
                                                href={service.href}
                                                className="text-base text-gray-600 hover:text-primary"
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-8">
                                <Link
                                    href="/contact"
                                    className="block w-full bg-primary text-white text-center py-3 rounded-sm font-medium"
                                >
                                    Request Consultation
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
