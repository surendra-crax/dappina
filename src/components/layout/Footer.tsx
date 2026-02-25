import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0A2A4A] text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-3 mb-4 inline-flex">
                            <img src="https://images.seeklogo.com/logo-png/51/2/ca-india-logo-png_seeklogo-513934.png" alt="CA India Logo" className="w-12 h-12 object-contain brightness-0 invert" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white tracking-tight">
                                    DAPPINA & CO.
                                </span>
                                <span className="text-[10px] text-gray-300 uppercase tracking-widest font-semibold block">
                                    Chartered Accountants
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Delivering end-to-end accounting, taxation, audit, and regulatory compliance services across India and the United States with technical depth and practical insight.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
                            <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
                            <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Our Services</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/services/india" className="hover:text-white transition-colors">Indian Practice & Audit</Link></li>
                            <li><Link href="/services/india" className="hover:text-white transition-colors">Taxation & Compliance</Link></li>
                            <li><Link href="/services/india" className="hover:text-white transition-colors">Setup & Advisory</Link></li>
                            <li><Link href="/services/us" className="hover:text-white transition-colors">U.S. Tax Returns</Link></li>
                            <li><Link href="/services/us" className="hover:text-white transition-colors">Outsourced Bookkeeping</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" />
                                <span>
                                    2nd Floor, Sriyanka Residency<br />
                                    8-3-214/54/1/A/2/4, Jaya Prakash Nagar<br />
                                    Padala Ramareddy Colony, Yousufguda<br />
                                    Hyderabad – 500073, India
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                                <span>+91 97054 33330</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                                <div>
                                    <a href="mailto:audit@dappina.in" className="hover:text-white transition-colors block">audit@dappina.in</a>
                                    <a href="mailto:pavan@dappina.in" className="hover:text-white transition-colors block">pavan@dappina.in</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; {currentYear} Dappina & Co. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
