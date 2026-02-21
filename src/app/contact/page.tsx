"use client";

import { FadeUp } from "@/components/ui/animations";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // EmailJS Placeholder: Integration goes here
        alert("Form submission triggered (EmailJS Integration Placeholder)");
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="bg-primary pt-32 pb-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Get in touch with our expert team for comprehensive financial and compliance advisory.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 flex-grow bg-sectionBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Contact Details */}
                        <FadeUp>
                            <h2 className="text-3xl font-bold text-primary mb-8">Reach Out to Dappina & Co.</h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                Whether you need assistance with an upcoming audit, corporate tax filing, or cross-border compliance, our team of professionals is ready to help you navigate complex regulatory environments.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6 shadow-sm border border-gray-100 flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Head Office</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            2nd Floor, Sriyanka Residency<br />
                                            8-3-214/54/1/A/2/4, Jaya Prakash Nagar<br />
                                            Padala Ramareddy Colony, Yousufguda<br />
                                            Hyderabad – 500073, Telangana, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6 shadow-sm border border-gray-100 flex-shrink-0">
                                        <Phone className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                                        <p className="text-gray-600 font-medium">+91 97054 33330</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6 shadow-sm border border-gray-100 flex-shrink-0">
                                        <Mail className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                                        <div className="space-y-1">
                                            <a href="mailto:audit@dappina.in" className="block text-gray-600 font-medium hover:text-primary transition-colors">audit@dappina.in</a>
                                            <a href="mailto:pavan@dappina.in" className="block text-gray-600 font-medium hover:text-primary transition-colors">pavan@dappina.in</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-12 bg-gray-200 w-full h-64 rounded-sm flex items-center justify-center border border-gray-300">
                                <div className="text-gray-500 font-medium flex flex-col items-center">
                                    <MapPin className="w-8 h-8 mb-2 opacity-50" />
                                    Google Maps Integration Placeholder
                                </div>
                            </div>
                        </FadeUp>

                        {/* Contact Form */}
                        <FadeUp delay={0.2} className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-100 h-fit">
                            <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">Request a Consultation</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input type="text" id="name" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="John Doe" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input type="email" id="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input type="tel" id="phone" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                                    <select id="service" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-700">
                                        <option value="" disabled defaultValue="">Select a Service</option>
                                        <option value="audit">Accounting & Audit (India)</option>
                                        <option value="tax-india">Taxation & Compliance (India)</option>
                                        <option value="setup">Business Setup & Advisory (India)</option>
                                        <option value="tax-us">U.S. Tax Return Preparation</option>
                                        <option value="accounting-us">U.S. Accounting & Bookkeeping</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                                    <textarea id="message" required rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-sm hover:bg-opacity-90 transition-colors flex items-center justify-center group shadow-md">
                                    <Send className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                    Submit Request
                                </button>
                            </form>
                        </FadeUp>

                    </div>
                </div>
            </section>
        </div>
    );
}
