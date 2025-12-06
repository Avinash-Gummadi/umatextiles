import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL('https://umatextiles.gummadii.com'),
  title: {
    default: "Uma Textiles and Fancy",
    template: "%s | Uma Textiles"
  },
  description: "Premium clothing showcase for Uma Textiles and Fancy.",
  icons: {
    icon: "/assets/logo9.png",
    shortcut: "/assets/logo9.png",
    apple: "/assets/logo9.png",
  },
  openGraph: {
    title: "Uma Textiles and Fancy",
    description: "Premium clothing showcase for Uma Textiles and Fancy.",
    url: 'https://umatextiles.gummadii.com',
    siteName: 'Uma Textiles',
    images: [
      {
        url: '/assets/logo9.png',
        width: 800,
        height: 600,
        alt: 'Uma Textiles Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Uma Textiles and Fancy",
    description: "Premium clothing showcase for Uma Textiles and Fancy.",
    images: ['/assets/logo9.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        playfair.variable
      )}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
