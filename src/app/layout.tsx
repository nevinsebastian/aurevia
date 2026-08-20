import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer, Header } from "@/components/Header";
import { company } from "@/data/company";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00a651",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aurevia-life-sciences.vercel.app"),
  title: {
    default: `${company.name} | Innovative Biopharmaceutical Company`,
    template: `%s | ${company.shortName}`,
  },
  description: `${company.name} is an innovative biopharmaceutical company, enabled by a world-class generics and wellness business. ${company.purpose}`,
  icons: {
    icon: [{ url: "/logo.png" }, { url: "/icon.png" }],
    apple: "/apple-icon.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: company.name,
    description: company.purpose,
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: company.name,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${sans.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
