"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, nav, telLink, waLink } from "@/data/company";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="" width={48} height={48} priority />
          <span className="brand-text">
            <strong>AUREVIA</strong>
            <span>Life Sciences</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <a className="btn btn-green btn-sm" href={waLink()} target="_blank" rel="noreferrer">
            Enquire
          </a>
          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a href={waLink()} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
          WhatsApp enquiry
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="footer-brand">
            <Image src="/logo.png" alt="" width={64} height={64} />
            <div>
              <h4>{company.name}</h4>
              <p>
                Healthcare marketing organisation offering practical nutraceutical, nutritional,
                Ayurvedic and urology-focused wellness products.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/where-to-buy">Where to Buy</Link>
            </li>
            <li>
              <Link href="/health-insights">Health Insights</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Products</h4>
          <ul>
            <li>
              <Link href="/products">All Products</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="/categories/urology">Urology</Link>
            </li>
            <li>
              <Link href="/new-products">New Products</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={telLink()}>Call {company.phone}</a>
            </li>
            <li>
              <a href={waLink()} target="_blank" rel="noreferrer">
                WhatsApp {company.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <p>
          Product information on this website is provided for general reference and should be read
          together with the current product label. Nutraceutical, nutritional, Ayurvedic, cosmetic,
          urology and wellness products should not be considered substitutes for diagnosis, treatment
          or professional medical advice.
        </p>
        <p>
          <Link href="/privacy">Privacy Policy</Link>
          {" · "}
          <Link href="/terms">Terms & Conditions</Link>
          {" · "}
          <Link href="/returns">Returns, Refunds & Cancellations</Link>
          {" · "}
          <Link href="/shipping">Shipping & Delivery</Link>
          {" · "}
          <Link href="/disclaimer">Medical / Product Disclaimer</Link>
        </p>
        <p>© {new Date().getFullYear()} {company.name}.</p>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a className="wa-float" href={waLink()} target="_blank" rel="noreferrer">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 3.9A10 10 0 0 0 3.3 17.6L2 22l4.5-1.2A10 10 0 0 0 12 22a10 10 0 0 0 8-18.1zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.6c-.1-.3 0-.4.1-.5l.4-.4.2-.3a.4.4 0 0 0 0-.4c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.4a.8.8 0 0 0-.6.3 2.5 2.5 0 0 0-.8 1.9 4.3 4.3 0 0 0 .9 2.3 9.9 9.9 0 0 0 3.8 3.4 12.7 12.7 0 0 0 1.3.5 3.1 3.1 0 0 0 1.4.1 2.4 2.4 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c-.1-.1-.2-.1-.4-.2z" />
      </svg>
      <span>WhatsApp enquiry</span>
    </a>
  );
}
