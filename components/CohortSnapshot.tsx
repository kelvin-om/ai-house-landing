import RevealOnScroll from "./RevealOnScroll";
import styles from "./CohortSnapshot.module.css";

const BREAKDOWN = [
  { label: "Software engineers", value: 46 },
  { label: "Students & recent grads", value: 31 },
  { label: "Founders & PMs", value: 23 },
];

const QUOTES = [
  '"I can get a demo working. I have no idea how to make it reliable."',
  '"Every tutorial stops right before the part I actually need."',
  '"I want to ship something I can put in front of a real user."',
  '"I have the idea. I don\'t have anyone to build it alongside."',
];

export default function CohortSnapshot() {
  return (
    <section className={styles.section} id="cohort">
      <div className="container">
        <RevealOnScroll>
          <div className={styles.head}>
            <span className={`eyebrow ${styles.eyebrow}`}>Cohort 04 · Snapshot</span>
            <h2 className={styles.heading}>Who&apos;s in the room</h2>
            <p className={styles.headSub}>
              Cohort 04 is currently filling up. Here&apos;s who has joined so far and what
              they told us they&apos;re struggling with.
            </p>
          </div>
        </RevealOnScroll>

        <div className={styles.layout}>
          <RevealOnScroll delay={80}>
            <div className={styles.breakdownCard}>
              <div className={styles.headcount}>
                <span className={styles.headcountNum}>38</span>
                <span className={styles.headcountLabel}>builders have joined Cohort 04</span>
              </div>

              <div className={styles.bars}>
                {BREAKDOWN.map((row) => (
                  <div className={styles.barRow} key={row.label}>
                    <div className={styles.barTop}>
                      <span>{row.label}</span>
                      <span>{row.value}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div className={styles.barFill} style={{ width: `${row.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={160}>
            <div className={styles.quotesCard}>
              <span className={styles.quotesLabel}>// Why they applied</span>
              <div className={styles.quoteList}>
                {QUOTES.map((quote) => (
                  <div className={styles.quoteItem} key={quote}>
                    <span className={styles.quoteDot} />
                    <span className={styles.quoteText}>{quote}</span>
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
