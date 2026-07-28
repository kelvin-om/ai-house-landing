import RevealOnScroll from "./RevealOnScroll";
import styles from "./Outcomes.module.css";

const STATS = [
  { num: "87%", label: "ship a working agent by Week 6" },
  { num: "3.4x", label: "average eval score improvement, Week 1 to Week 6" },
  { num: "62%", label: "get an interview within 90 days of demo day" },
  { num: "94%", label: "would apply again if starting over" },
];

const TAKEAWAYS = [
  "A shipped, evaluated agent you can put in your portfolio",
  "A public GitHub repo showing real, working code",
  "An Agent Builder badge backed by your actual eval scores",
  "Direct intros to hiring partners after demo day",
  "Lifetime access to the AI House alumni Discord",
  "A recorded demo day pitch you can reuse for interviews",
];

export default function Outcomes() {
  return (
    <section className={styles.section} id="outcomes">
      <div className="container">
        <RevealOnScroll>
          <div className={styles.head}>
            <span className={`eyebrow ${styles.eyebrow}`}>What you leave with</span>
            <h2 className={styles.heading}>This isn&apos;t just six weeks of sessions</h2>
            <p className={styles.headSub}>
              Here&apos;s what past cohorts actually walked away with — and what you can
              expect if you apply.
            </p>
          </div>
        </RevealOnScroll>

        <div className={styles.statRow}>
          {STATS.map((s, i) => (
            <RevealOnScroll delay={i * 70} key={s.label}>
              <div className={styles.statCard}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={200}>
          <div className={styles.takeaway}>
            <div className={styles.takeawayTitle}>What you leave with, concretely</div>
            <div className={styles.takeawaySub}>// not a certificate for showing up</div>
            <div className={styles.takeawayList}>
              {TAKEAWAYS.map((t) => (
                <div className={styles.takeawayItem} key={t}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
