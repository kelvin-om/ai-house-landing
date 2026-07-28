import RevealOnScroll from "./RevealOnScroll";
import styles from "./About.module.css";

const PILLARS = [
  {
    title: "Build in public rooms",
    text: "Every project is worked on in the open, in the house, next to people who'll tell you when it's not working yet.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 21V9l8-6 8 6v12h-6v-7h-4v7H4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Ship weekly, not someday",
    text: "Cohorts move in weekly sprints with a working checkpoint every Friday — momentum over polish.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Mentors who still build",
    text: "Every mentor is an active engineer or founder shipping agents themselves, not a slide deck away from the work.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

function PeopleIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.5 20c1-3.6 3.2-5.4 6-5.4s5 1.8 6 5.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="17" cy="8.5" r="2.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M14.7 14.6c2.5.3 4.1 2 5 5.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.topGrid}>
          <RevealOnScroll>
            <span className={`eyebrow ${styles.eyebrow}`}>What Cohort 04 is</span>
            <h2 className={styles.heading}>A 6-week residency, not a course</h2>

            <div className={styles.copyCol}>
              <p>
                Cohort 04 is a small, in-house group of builders working on one thing for six
                weeks: taking an agent from a rough idea to something that actually holds up
                in front of a real user. You show up three evenings a week, work alongside a
                mentor pod, and leave with a shipped, evaluated agent — not a certificate for
                sitting through slides.
              </p>
              <p>
                It isn&apos;t a beginner tutorial and it isn&apos;t a lecture series. It&apos;s
                structured around the same failure points every builder hits — unreliable
                output, no evals, nothing hardened for real users — and six weeks to fix them,
                one at a time, with people who&apos;ll tell you when it&apos;s not working yet.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className={styles.visual}>
              <div className={styles.visualGrid} aria-hidden="true" />
              <span className={styles.visualTag}>Photo placeholder</span>
              <div className={styles.visualIcon}>
                <PeopleIcon />
              </div>
              <div className={styles.statChips}>
                <div className={styles.statChip}>
                  <div className={styles.statChipNum}>40</div>
                  <div className={styles.statChipLabel}>Builders</div>
                </div>
                <div className={styles.statChip}>
                  <div className={styles.statChipNum}>6</div>
                  <div className={styles.statChipLabel}>Weeks</div>
                </div>
                <div className={styles.statChip}>
                  <div className={styles.statChipNum}>3x</div>
                  <div className={styles.statChipLabel}>Per week</div>
                </div>
              </div>
              <div className={styles.visualCaption}>Cohort 04 · in the house</div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={160}>
          <div className={styles.pillars}>
            {PILLARS.map((pillar) => (
              <div className={styles.pillar} key={pillar.title}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <div className={styles.pillarTitle}>{pillar.title}</div>
                <p className={styles.pillarText}>{pillar.text}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
