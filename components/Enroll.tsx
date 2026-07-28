import RevealOnScroll from "./RevealOnScroll";
import styles from "./Enroll.module.css";

export default function Enroll() {
  return (
    <section className={styles.section} id="enroll">
      <div className="container">
        <RevealOnScroll>
          <div className={styles.panel}>
            <div className={styles.glow} aria-hidden="true" />
            <span className={`eyebrow ${styles.eyebrow}`}>Ready to ship something real?</span>
            <h2 className={styles.heading}>
              Your agent deserves to <em>actually work</em>
            </h2>
            <p className={styles.sub}>
              Stop patching symptoms. Spend 5 evenings building the foundations that let
              you ship confidently — and prove it with a score.
            </p>

            <div className={styles.actions}>
              <a href="#pricing" className="btn-brand">
                Claim Your Early Spot →
              </a>
            </div>

            <p className={styles.note}>
              Cohort 01 · <strong>30 seats only</strong> · Early pricing ends when full
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
