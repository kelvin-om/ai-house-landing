"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import styles from "./FAQ.module.css";

const FAQS = [
  {
    q: "Do I need a working agent already?",
    a: "No. You need a rough idea and enough coding experience to be dangerous — most of Week 1 is spent scoping that idea into something buildable in six weeks.",
  },
  {
    q: "What if I miss a session?",
    a: "Every session is recorded, and you keep access to recordings after the cohort ends. That said, the mentor pod and pairing work is hard to replicate async, so we ask people to plan around the schedule before applying.",
  },
  {
    q: "Is this remote or in-person?",
    a: "In-house at AI House HQ, three evenings a week. Async work and mentor check-ins happen over Discord in between sessions.",
  },
  {
    q: "What happens if I don't get in?",
    a: "Applications are reviewed on a rolling basis until the cohort fills. If you don't get a seat in Cohort 04, you're automatically considered first for Cohort 05.",
  },
  {
    q: "Is there a refund policy?",
    a: "Full refund if you drop before Week 2 starts. After that, refunds are prorated based on sessions attended — reach out to the team and we'll work it out directly.",
  },
  {
    q: "What happens after demo day?",
    a: "You keep your Agent Builder badge, your eval scores, and access to the AI House alumni Discord — plus an intro to hiring partners if you're looking for your next role.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <RevealOnScroll>
          <div className={styles.head}>
            <span className={`eyebrow ${styles.eyebrow}`}>Before you apply</span>
            <h2 className={styles.heading}>Questions people actually ask</h2>
            <p className={styles.headSub}>
              If something&apos;s not covered here, ask directly before you apply — we&apos;d
              rather answer than have you guess.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <div className={styles.list}>
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div className={styles.item} key={item.q}>
                  <button
                    type="button"
                    className={styles.question}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className={styles.questionText}>{item.q}</span>
                    <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ""}`}>
                    <div className={styles.answerInner}>
                      <p className={styles.answer}>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
