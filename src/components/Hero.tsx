"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Aurevia in Q2 2026",
    text: "Building sustainable, innovation-driven growth and long-term value creation",
    href: "/news/pivot-to-growth",
    cta: "View the press release",
  },
  {
    title: "We are all in for better health",
    text: "Aurevia Life Sciences is an innovative biopharmaceutical company, enabled by a world-class generics business.",
    href: "/our-company",
    cta: "Get to know Aurevia",
  },
  {
    title: "Finding solutions to unmet medical needs",
    text: "We focus on innovative medicine for urology, neuroscience and immunology.",
    href: "/science/therapeutic-areas",
    cta: "Learn about our latest innovations",
  },
  {
    title: "Stepping up innovation",
    text: "Explore our R&D pipeline — with urology as a lead franchise.",
    href: "/science/pipeline",
    cta: "Explore the R&D pipeline",
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % slides.length), 7000);
    return () => window.clearInterval(id);
  }, [playing]);

  const slide = slides[i];

  return (
    <section className="teva-hero">
      <Molecules />
      <div className="hero-disc">
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        <Link className="text-cta" href={slide.href}>
          {slide.cta} <span aria-hidden="true">→</span>
        </Link>
        <div className="hero-controls">
          <div className="dots" role="tablist" aria-label="Hero slides">
            {slides.map((s, idx) => (
              <button
                key={s.title}
                className={idx === i ? "on" : ""}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
          <div className="play-btns">
            <button aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying((p) => !p)}>
              {playing ? (
                <svg width="12" height="12" viewBox="0 0 12 12"><rect x="2" y="1" width="3" height="10" fill="currentColor" /><rect x="7" y="1" width="3" height="10" fill="currentColor" /></svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 1l8 5-8 5z" fill="currentColor" /></svg>
              )}
            </button>
            <button aria-label="Previous" onClick={() => setI((n) => (n - 1 + slides.length) % slides.length)}>
              <svg width="12" height="12" viewBox="0 0 12 12"><path d="M8 2L4 6l4 4" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
            </button>
            <button aria-label="Next" onClick={() => setI((n) => (n + 1) % slides.length)}>
              <svg width="12" height="12" viewBox="0 0 12 12"><path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Molecules() {
  return (
    <svg className="mols" viewBox="0 0 1200 640" aria-hidden="true">
      <g fill="#12a35a" opacity="0.92">
        <circle cx="980" cy="180" r="54" />
        <circle cx="1088" cy="248" r="38" />
        <circle cx="940" cy="300" r="28" />
        <circle cx="1120" cy="140" r="22" fill="#7ed957" />
      </g>
      <g stroke="#12a35a" strokeWidth="10" fill="none" opacity="0.85">
        <line x1="980" y1="180" x2="1088" y2="248" />
        <line x1="980" y1="180" x2="940" y2="300" />
        <line x1="1088" y1="248" x2="1120" y2="140" />
      </g>
      <g fill="#0e8a4c" opacity="0.35">
        <circle cx="160" cy="80" r="36" />
        <circle cx="230" cy="40" r="18" />
        <circle cx="70" cy="480" r="48" />
        <circle cx="140" cy="540" r="22" />
      </g>
      <g stroke="#0e8a4c" strokeWidth="8" fill="none" opacity="0.3">
        <line x1="160" y1="80" x2="230" y2="40" />
        <line x1="70" y1="480" x2="140" y2="540" />
      </g>
    </svg>
  );
}
