import RevealOnScroll from "./RevealOnScroll";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    initials: "RS",
    name: "Rhea S.",
    role: "Cohort 03 · now ML Engineer at a Series B startup",
    quote:
      "The eval suite from Week 3 alone changed how I ship everything now, not just this project.",
    gradient: "linear-gradient(135deg, #724e99, #2a1840)",
  },
  {
    initials: "AK",
    name: "Arjun K.",
    role: "Cohort 02 · shipped a solo SaaS post-cohort",
    quote:
      "Demo day pressure is exactly what got my agent from 'works on my machine' to actually usable.",
    gradient: "linear-gradient(135deg, #9b7bb8, #4a2880)",
  },
  {
    initials: "PM",
    name: "Priya M.",
    role: "Cohort 03 · joined as a student, hired as a founding engineer",
    quote:
      "The mentor pod meant I was never stuck for more than a day — someone had hit the same wall.",
    gradient: "linear-gradient(135deg, #c4a5e0, #724e99)",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="alumni">
      <div className="container">
        <RevealOnScroll>
          <div className={styles.head}>
            <span className={`eyebrow ${styles.eyebrow}`}>From past cohorts</span>
            <h2 className={styles.heading}>What builders say after they ship</h2>
            <p className={styles.headSub}>
              Cohort 04 is new, but the format isn&apos;t — here&apos;s what past cohorts
              said after their demo day.
            </p>
          </div>
        </RevealOnScroll>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll delay={i * 90} key={t.name}>
              <div className={styles.card}>
                <div className={styles.stars} aria-label="5 out of 5">
                  ★★★★★
                </div>
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.person}>
                  <span className={styles.avatar} style={{ background: t.gradient }}>
                    {t.initials}
                  </span>
                  <div>
                    <div className={styles.name}>{t.name}</div>
                    <div className={styles.role}>{t.role}</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
