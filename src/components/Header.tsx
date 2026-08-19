"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, nav, telLink, waLink } from "@/data/company";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div className="util">
        <div className="wrap util-inner">
          <a href={telLink()}>Call {company.phone}</a>
          <a href={waLink()} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
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
              <div className="nav-item" key={item.href}>
                <Link href={item.href} className={active(item.href) ? "active" : undefined}>
                  {item.label}
                </Link>
                {item.children && (
                  <div className="drop">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
        <div className={`mobile-nav ${open ? "open" : ""}`}>
          {nav.map((item) => (
            <div key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link key={child.href} className="sub" href={child.href} onClick={() => setOpen(false)}>
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="footer-brand">
            <Image src="/logo.png" alt="" width={56} height={56} />
            <div>
              <h4>{company.name}</h4>
              <p>{company.purpose}</p>
              <p style={{ marginTop: 8 }}>{company.tagline}</p>
            </div>
          </div>
        </div>
        <div>
          <h4>Our Company</h4>
          <ul>
            <li><Link href="/our-company">Who We Are</Link></li>
            <li><Link href="/our-company/purpose">Our Purpose</Link></li>
            <li><Link href="/sustainability">Sustainability & Impact</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4>Science</h4>
          <ul>
            <li><Link href="/science">Research & Development</Link></li>
            <li><Link href="/science/pipeline">R&D Pipeline</Link></li>
            <li><Link href="/science/therapeutic-areas">Therapeutic Areas</Link></li>
            <li><Link href="/science/clinical-trials">Clinical Trials</Link></li>
            <li><Link href="/solutions">Our Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={telLink()}>Call {company.phone}</a></li>
            <li><a href={waLink()} target="_blank" rel="noreferrer">WhatsApp {company.phone}</a></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/news">Newsroom</Link></li>
            <li><Link href="/patients">Patients</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <p>
          Information on this website is for general reference. It is not a substitute for diagnosis,
          treatment or advice from a qualified healthcare professional. Always read the current label
          and consult a clinician.
        </p>
        <p>
          <Link href="/privacy">Data Privacy</Link>
          {" · "}
          <Link href="/terms">Terms of Use</Link>
          {" · "}
          <Link href="/disclaimer">Medical Disclaimer</Link>
          {" · "}
          <Link href="/shipping">Supply & Access</Link>
        </p>
        <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
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
      <span>WhatsApp</span>
    </a>
  );
}
