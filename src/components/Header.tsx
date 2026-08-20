"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { company, nav, type NavItem } from "@/data/company";

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg className={`chev ${open ? "up" : ""}`} width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg className="link-arrow" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const searchId = useId();

  useEffect(() => {
    document.body.classList.toggle("menu-lock", open || searchOpen);
    return () => document.body.classList.remove("menu-lock");
  }, [open, searchOpen]);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
    setMobileSection(null);
  }, [pathname]);

  const links = nav.flatMap((item) => [
    { href: item.href, label: item.label },
    ...(item.children ?? []),
  ]);
  const results = query.trim()
    ? links.filter((l) => l.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <header className="site-header">
      <div className="header-bar wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Aurevia Life Sciences" width={44} height={44} priority />
          <span className="wordmark">aurevia</span>
        </Link>

        <nav className="desk-nav" aria-label="Primary">
          {nav.map((item) => (
            <DesktopItem key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="utils">
          <Link className="util-contact" href="/contact">
            Contact Us
          </Link>
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={() => {
              setSearchOpen(true);
              setOpen(false);
            }}
          >
            <SearchIcon />
          </button>
          <button
            className={`menu-btn ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i />
            <i />
            <i />
          </button>
        </div>
      </div>

      <div className={`mobile-overlay ${open ? "open" : ""}`} role="dialog" aria-modal={open} aria-label="Menu">
        <div className="mobile-panel">
          {nav.map((item) => {
            const hasKids = Boolean(item.children?.length);
            const expanded = mobileSection === item.href;
            return (
              <div className="m-block" key={item.href}>
                {hasKids ? (
                  <button
                    className={`m-parent ${expanded ? "on" : ""}`}
                    onClick={() => setMobileSection(expanded ? null : item.href)}
                    aria-expanded={expanded}
                  >
                    <span>{item.label}</span>
                    <Chevron open={expanded} />
                  </button>
                ) : (
                  <Link className="m-parent" href={item.href}>
                    {item.label}
                  </Link>
                )}
                {hasKids && expanded && (
                  <div className="m-kids">
                    {item.children!.map((child) => (
                      <Link key={child.href + child.label} href={child.href}>
                        <Arrow />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="m-foot">
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className={`search-overlay ${searchOpen ? "open" : ""}`}>
        <div className="search-box">
          <label htmlFor={searchId}>Search</label>
          <input
            id={searchId}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Aurevia"
            autoComplete="off"
          />
          <button type="button" onClick={() => setSearchOpen(false)}>
            Close
          </button>
          {results.length > 0 && (
            <ul>
              {results.map((r) => (
                <li key={r.href + r.label}>
                  <Link href={r.href} onClick={() => setSearchOpen(false)}>
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

function DesktopItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
  return (
    <div className={`d-item ${active ? "active" : ""}`}>
      <Link href={item.href} className="d-link">
        {item.label}
        {item.children && <Chevron />}
      </Link>
      {item.children && (
        <div className="d-drop">
          {item.children.map((child) => (
            <Link key={child.href + child.label} href={child.href}>
              <Arrow />
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.8" />
    </svg>
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
            </div>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/our-company">About Aurevia</Link></li>
            <li><Link href="/our-company/purpose">Purpose</Link></li>
            <li><Link href="/sustainability">Sustainability & Impact</Link></li>
            <li><Link href="/careers">Your Career</Link></li>
          </ul>
        </div>
        <div>
          <h4>Our Science</h4>
          <ul>
            <li><Link href="/science/pipeline">R&D Pipeline</Link></li>
            <li><Link href="/science/therapeutic-areas">Therapeutic Areas</Link></li>
            <li><Link href="/science/clinical-trials">Clinical Trials</Link></li>
            <li><Link href="/solutions">Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/news">Newsroom</Link></li>
            <li><Link href="/investors">Investors</Link></li>
            <li><a href={`mailto:${company.inboxEmail}`}>{company.inboxEmail}</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <p>
          Information on this website is for general reference. It is not a substitute for diagnosis,
          treatment or professional medical advice.
        </p>
        <p>
          <Link href="/privacy">Data Privacy</Link>
          {" · "}
          <Link href="/terms">Terms of Use</Link>
          {" · "}
          <Link href="/disclaimer">Medical Disclaimer</Link>
        </p>
        <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
