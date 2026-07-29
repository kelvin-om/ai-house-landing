import Navbar from "./Navbar";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.glow} ${styles.glowOne}`} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glowTwo}`} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <Navbar />

      <div className={styles.inner}>
        <span className={`eyebrow ${styles.eyebrow}`}>Powered by AI House</span>
        <h1 className={styles.headline}>
          Six weeks. <em>One shipped<br className={styles.breakDesktop} /> agent.</em>
        </h1>
        <p className={styles.sub}>
          A 6-week, in-house cohort for builders who want to ship a real agent —
          not just read about one.
        </p>

        <div className={styles.actions}>
          <a href="#enroll" className="btn-brand">
            Apply to Cohort →
          </a>
        </div>

        <p className={styles.trustLine}>Trusted by 25,000+ AI builders worldwide</p>
      </div>
    </section>
  );
}
