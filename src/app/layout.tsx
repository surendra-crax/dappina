import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
    src: '../fonts/Inter.ttf',
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Dappina & Co. | Chartered Accountants',
    description: 'Comprehensive Accounting, Taxation, Regulatory & Outsourcing Services for Individuals, Businesses & Global Clients.',
}

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
