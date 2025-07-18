import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
    title: "Gabriele Battimelli",
    description: "Gabriele Battimelli is an activist and Startup Founder",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${GeistSans.className} antialiased`}>
        {children}
        </body>
        </html>
    );
}
