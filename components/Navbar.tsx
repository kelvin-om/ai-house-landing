"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const LINKS = [
  { href: "#curriculum", label: "Curriculum" },
  { href: "#cohort", label: "The Cohort" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.siteHeader}>
        <nav className={styles.navShell} aria-label="Primary">
          <a className={styles.navLogo} href="#" aria-label="AI House home">
            <span className={styles.logoChip}>
              <Image src="/assets/logo-mark.png" alt="AI House" width={220} height={40} priority />
            </span>
          </a>

          <div className={styles.navLinks}>
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <a href="#enroll" className={`btn-brand ${styles.navCta}`}>
            Enroll now
          </a>

          <button
            className={styles.navToggle}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </header>

      <div
        className={`${styles.overlay} ${open ? styles.isOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`${styles.mobileNav} ${open ? styles.isOpen : ""}`}
        role="dialog"
        aria-label="Mobile menu"
        aria-hidden={!open}
      >
        <div className={styles.mobileNavHead}>
          <a className={styles.navLogo} href="#" onClick={() => setOpen(false)} aria-label="AI House home">
            <span className={styles.logoChip}>
              <Image src="/assets/logo-mark.png" alt="AI House" width={198} height={36} />
            </span>
          </a>
          <button className={styles.closeBtn} type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#enroll" className="btn-brand" onClick={() => setOpen(false)}>
          Enroll now
        </a>
      </div>
    </>
  );
}
