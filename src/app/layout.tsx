import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import { Footer, Header, WhatsAppFloat } from "@/components/Header";
import { company } from "@/data/company";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2340",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aurevia-life-sciences.vercel.app"),
  title: {
    default: `${company.name} | Healthcare and Wellness Products`,
    template: `%s | ${company.shortName}`,
  },
  description: company.heroLead,
  icons: { icon: "/logo.png" },
  openGraph: {
    title: company.name,
    description: company.heroLead,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} ${sans.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
