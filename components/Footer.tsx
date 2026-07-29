import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div>
            <a className={styles.footerBrand} href="#" aria-label="AI House home">
              <span className={styles.footerLogoChip}>
                <Image src="/assets/footer-logo-new.png" alt="AI House" width={242} height={44} />
              </span>
            </a>
            <p className={styles.footerTagline}>
              Empowering the next generation of developers with hands-on industry experience
              and AI-guided learning.
            </p>
          </div>

          <div className={styles.footerCols}>
            <nav className={styles.footerCol} aria-label="Cohort links">
              <span className={styles.footerColTitle}>Cohort 01</span>
              <a href="#curriculum">Curriculum</a>
              <a href="#cohort">Who&apos;s joining</a>
              <a href="#pricing">Pricing</a>
            </nav>

            <nav className={styles.footerCol} aria-label="House links">
              <span className={styles.footerColTitle}>House</span>
              <a href="#">Home</a>
              <a href="#gallery">Gallery</a>
              <a href="#details">Details</a>
            </nav>

            <nav className={styles.footerCol} aria-label="More links">
              <span className={styles.footerColTitle}>More</span>
              <a href="https://luma.com/ai_house" target="_blank" rel="noopener noreferrer">
                Events
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>© {year} AI House. All rights reserved.</p>
          <div className={styles.footerSocial}>
            <a
              href="https://x.com/dchawla1307"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AI House on X"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
