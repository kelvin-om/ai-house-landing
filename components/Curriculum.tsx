"use client";

import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import styles from "./Curriculum.module.css";

const WEEKS = [
  {
    id: "week-1",
    label: "Idea to Agent Scaffold",
    pain: "\u201cI have an idea. I don\u2019t know how to turn it into a working agent.\u201d",
    sessions: [
      {
        time: "Session 1",
        title: "Scoping a buildable agent",
        text: "Turn a rough idea into something narrow enough to ship in six weeks. Pick one workflow, one user, one clear success condition.",
      },
      {
        time: "Session 2",
        title: "Scaffold + first tool call",
        text: "Set up the agent workspace, wire your first tool, and get a v0 responding to real input by the end of the session.",
      },
      {
        time: "Session 3",
        title: "Pairing & critique",
        text: "Pair with another builder, trade agents, and get direct feedback on scope and structure before you go further.",
      },
    ],
    homework: "Ship a v0 that handles one real input end to end. Bring it to Week 2.",
  },
  {
    id: "week-2",
    label: "Tools, Memory & Retrieval",
    pain: "\u201cMy agent forgets context and calls the wrong tool half the time.\u201d",
    sessions: [
      {
        time: "Session 1",
        title: "Designing a tool interface",
        text: "What makes a tool easy for a model to call correctly — naming, schemas, and error messages that the agent can actually recover from.",
      },
      {
        time: "Session 2",
        title: "Memory that doesn't break",
        text: "Short-term vs. long-term vs. episodic memory, and when a vector store is the wrong tool for the job.",
      },
      {
        time: "Session 3",
        title: "Retrieval hands-on",
        text: "Wire retrieval into your agent and test it against queries it hasn't seen before.",
      },
    ],
    homework: "Add two new tools to your agent and log every failed tool call for a day.",
  },
  {
    id: "week-3",
    label: "Building an Evaluation System",
    pain: "\u201cI'm debugging by vibes. I have no idea if my fixes actually work.\u201d",
    sessions: [
      {
        time: "Session 1",
        title: "Evals 101 for builders",
        text: "The difference between a unit test and an agent eval, and what a minimal eval suite looks like for a solo builder.",
      },
      {
        time: "Session 2",
        title: "Build your eval suite",
        text: "Write 10 eval cases against your own agent — happy path, edge cases, and adversarial input. Run them and see your real failure rate.",
      },
      {
        time: "Session 3",
        title: "Baselines & regression gates",
        text: "Set a baseline score and make it part of your own deploy checklist — if the score drops, you don't ship.",
      },
    ],
    homework: "Get your eval suite to 15 cases, including 3 adversarial ones.",
  },
  {
    id: "week-4",
    label: "Hardening & Guardrails",
    pain: "\u201cIt works until someone uses it in a way I didn't expect.\u201d",
    sessions: [
      {
        time: "Session 1",
        title: "Prompt engineering for production",
        text: "System prompt structure, instruction hierarchy, and why your 500-word prompt is probably part of the problem.",
      },
      {
        time: "Session 2",
        title: "Loop safety & guardrails",
        text: "Circuit breakers, max-step limits, and stopping an agent from burning your API budget in one bad session.",
      },
      {
        time: "Session 3",
        title: "Hardening sprint",
        text: "Fix your #1 failure mode from Week 3's evals, then re-run the suite and see if the score actually moves.",
      },
    ],
    homework: "Run your agent for 30 minutes with a friend acting as an adversarial user.",
  },
  {
    id: "week-5",
    label: "Deployment & Observability",
    pain: "\u201cIt works for me. The moment someone else touches it, it breaks.\u201d",
    sessions: [
      {
        time: "Session 1",
        title: "The pre-deploy checklist",
        text: "Latency budgets, fallback behavior, cost controls, and the 'agent is thinking forever' UX problem.",
      },
      {
        time: "Session 2",
        title: "Observability, hands-on",
        text: "Instrument your agent with tracing, read a real trace, and find the exact step where a failure happens.",
      },
      {
        time: "Session 3",
        title: "Soft launch strategy",
        text: "Beta gating and feedback loops — getting your agent in front of 10 real people before 1,000.",
      },
    ],
    homework: "Deploy to a staging environment and hand it to one real person who isn't you.",
  },
  {
    id: "week-6",
    label: "Scale, Pricing & Demo Day",
    pain: "\u201cI've shipped it. Now how do I grow it without it falling over?\u201d",
    sessions: [
      {
        time: "Session 1",
        title: "Scaling patterns",
        text: "Rate limiting, queueing, and the basics of multi-agent orchestration — when you actually need more than one agent.",
      },
      {
        time: "Session 2",
        title: "Pricing your agent",
        text: "Per-task, per-seat, or outcome-based? A practical look at how early agent products actually charge.",
      },
      {
        time: "Session 3",
        title: "Demo day",
        text: "A live, timed demo in front of the cohort, mentors, and hiring partners. What you built, what broke, what you'd do differently.",
      },
    ],
    homework: null,
  },
];

export default function Curriculum() {
  const [active, setActive] = useState(WEEKS[0].id);
  const slotRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const navRef = useRef<HTMLDivElement | null>(null);
  const btnRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    Object.values(slotRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const btn = btnRefs.current[active];
      const nav = navRef.current;
      if (!btn || !nav) return;
      const btnRect = btn.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setIndicator({
        top: btnRect.top - navRect.top,
        left: btnRect.left - navRect.left,
        width: btnRect.width,
        height: btnRect.height,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    slotRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.section} id="curriculum">
      <div className="container">
        <RevealOnScroll>
          <div className={styles.head}>
            <span className={`eyebrow ${styles.eyebrow}`}>What the cohort teaches</span>
            <h2 className={styles.heading}>Six weeks, one shipped agent</h2>
            <p className={styles.headSub}>
              Every week ends with something concrete — a working piece of your agent, not
              just notes. Scroll through exactly what&apos;s covered.
            </p>
          </div>
        </RevealOnScroll>

        <div className={styles.layout}>
          <div className={styles.navSticky}>
            <nav className={styles.weekNav} aria-label="Curriculum weeks" ref={navRef}>
              {indicator && (
                <span
                  className={styles.navIndicator}
                  style={{
                    transform: `translate(${indicator.left}px, ${indicator.top}px)`,
                    width: indicator.width,
                    height: indicator.height,
                  }}
                  aria-hidden="true"
                />
              )}
              {WEEKS.map((w, i) => (
                <a
                  key={w.id}
                  href={`#${w.id}`}
                  ref={(el) => {
                    btnRefs.current[w.id] = el;
                  }}
                  className={`${styles.weekBtn} ${active === w.id ? styles.weekBtnActive : ""}`}
                  onClick={(e) => handleNavClick(e, w.id)}
                  aria-current={active === w.id ? "true" : undefined}
                >
                  <span className={styles.weekNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.weekLabel}>{w.label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.daysContent}>
            {WEEKS.map((week, i) => (
              <div
                className={styles.weekSlot}
                id={week.id}
                key={week.id}
                ref={(el) => {
                  slotRefs.current[week.id] = el;
                }}
              >
                <RevealOnScroll className={styles.stickyCardWrap}>
                  <div className={styles.card}>
                    <div className={styles.cardHead}>
                      <span className={styles.bigNum}>{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <div className={styles.cardEyebrow}>Week {i + 1}</div>
                        <h3 className={styles.cardTitle}>{week.label}</h3>
                        <p className={styles.painLine}>{week.pain}</p>
                      </div>
                    </div>

                    <div className={styles.sessions}>
                      {week.sessions.map((s) => (
                        <div className={styles.sessionRow} key={s.title}>
                          <span className={styles.sessionTime}>{s.time}</span>
                          <div>
                            <div className={styles.sessionTitle}>{s.title}</div>
                            <p className={styles.sessionText}>{s.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {week.homework && (
                      <div className={styles.homework}>
                        <span className={styles.homeworkLabel}>Homework</span>
                        <p className={styles.homeworkText}>{week.homework}</p>
                      </div>
                    )}
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
