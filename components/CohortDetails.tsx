import RevealOnScroll from "./RevealOnScroll";
import styles from "./CohortDetails.module.css";

const DETAILS = [
  {
    key: "Format",
    value: "3 in-house evenings a week, 2 hours each",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 9h18M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "Time",
    value: "6:30 – 8:30 PM, on-site at AI House",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "Cohort size",
    value: "40 builders maximum",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2.5 20c1-3.6 3.4-5.4 6.5-5.4s5.5 1.8 6.5 5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17.5" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15.5 14.3c2.4.2 4.1 1.9 5 5.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

const STATS = [
  { num: "25,000+", label: "AI builders worldwide" },
  { num: "100+", label: "events & workshops" },
  { num: "15,000+", label: "active platform users" },
  { num: "5,000+", label: "mentored 1:1" },
];

const STEPS = [
  {
    title: "A cohort runs",
    text: "40 builders spend six weeks going deep on one agent, in the house, three evenings a week.",
  },
  {
    title: "Every agent gets evaluated",
    text: "Eval suites built in Week 3 turn into real scores — not vibes — attached to each builder's project.",
  },
  {
    title: "Demo day, for real",
    text: "Cohort, mentors, and hiring partners watch live demos. Top builders get featured on the AI House showcase.",
  },
  {
    title: "The next cohort gets better",
    text: "What worked and what didn't feeds directly into how the next six weeks are run.",
  },
];

export default function CohortDetails() {
  return (
    <section className={styles.section} id="details">
      <div className="container">
        <RevealOnScroll>
          <div className={styles.head}>
            <span className={`eyebrow ${styles.eyebrow}`}>Cohort details</span>
            <h2 className={styles.heading}>What you&apos;re signing up for, exactly</h2>
            <p className={styles.headSub}>
              No surprises — here&apos;s the format, the schedule, and why the program is
              structured this way.
            </p>
          </div>
        </RevealOnScroll>

        <div className={styles.grid}>
          <RevealOnScroll delay={80}>
            <div className={styles.detailList}>
              {DETAILS.map((d) => (
                <div className={styles.detailRow} key={d.key}>
                  <div className={styles.detailIcon}>{d.icon}</div>
                  <div>
                    <div className={styles.detailKey}>{d.key}</div>
                    <div className={styles.detailVal}>{d.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.statGrid}>
              {STATS.map((s) => (
                <div className={styles.statBox} key={s.label}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={160}>
            <div className={styles.whyBox}>
              <div className={styles.whyTitle}>Why the cohort is structured this way</div>
              <div className={styles.whySub}>How one cohort leads into the next</div>
              <div className={styles.steps}>
                {STEPS.map((step, i) => (
                  <div className={styles.step} key={step.title}>
                    <div className={styles.stepMarker}>
                      <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                      {i < STEPS.length - 1 && <span className={styles.stepLine} aria-hidden="true" />}
                    </div>
                    <div className={styles.stepBody}>
                      <div className={styles.stepTitle}>{step.title}</div>
                      <p className={styles.stepText}>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
