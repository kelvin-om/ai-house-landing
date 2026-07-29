import RevealOnScroll from "./RevealOnScroll";
import styles from "./Pricing.module.css";

const FEATURES = [
  "All 5 live sessions (2 hrs each)",
  "Session recordings forever",
  "Dr. Agent repo diagnostic scan",
  "Private cohort Discord",
  "Code review on your agent",
  "Homework templates + frameworks",
  "Production-Ready Builder badge",
  "HiDevs Showcase feature",
  "Cohort graduation certificate",
];

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <RevealOnScroll>
          <div className={styles.head}>
            <span className={`eyebrow ${styles.eyebrow}`}>Investment</span>
            <h2 className={styles.heading}>
              Less than one engineer&rsquo;s day rate. Ship in a week.
            </h2>
            <p className={styles.headSub}>Early cohort pricing. First 30 sign-ups only.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <div className={styles.card}>
            <div className={styles.left}>
              <span className={styles.badge}>⚡ 50% Early Bird Off</span>
              <div className={styles.priceLabel}>Full Access · All 5 Days</div>
              <div className={styles.priceRow}>
                <span className={styles.priceNow}>$499</span>
                <span className={styles.priceWas}>$999</span>
              </div>
              <p className={styles.priceTagline}>
                One price. Everything included. You save $500.
              </p>
            </div>

            <div className={styles.right}>
              <ul className={styles.features}>
                {FEATURES.map((f) => (
                  <li key={f}>
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div>
                <a href="#enroll" className="btn-brand">
                  Enroll Now — $499 →
                </a>
              </div>

              <div className={styles.seats}>
                <div className={styles.seatsTop}>
                  <span>11 of 30 seats filled</span>
                  <span>19 remaining</span>
                </div>
                <div className={styles.seatsTrack}>
                  <div className={styles.seatsFill} style={{ width: "37%" }} />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <p className={styles.note}>
          <strong>⚡ Early pricing closes when 30 seats are filled.</strong> Price returns to
          $999 for Cohort 2. No exceptions.
        </p>
      </div>
    </section>
  );
}
