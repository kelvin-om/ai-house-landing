import RevealOnScroll from "./RevealOnScroll";
import styles from "./Mentors.module.css";

const MENTORS = [
  {
    initials: "DV",
    name: "Dev V.",
    role: "Lead Mentor · Agent Infra Eng.",
    bio: "Built eval and observability tooling for production agent systems. Runs the Week 3 and Week 5 sessions.",
    gradient: "linear-gradient(135deg, #724e99, #2a1840)",
  },
  {
    initials: "SN",
    name: "Simran N.",
    role: "Mentor · Applied ML",
    bio: "Ships retrieval and memory systems for a Series A agent startup. Leads pod critique twice a week.",
    gradient: "linear-gradient(135deg, #9b7bb8, #4a2880)",
  },
  {
    initials: "RK",
    name: "Rahul K.",
    role: "Mentor · Founder in Residence",
    bio: "Two-time founder. Runs the Week 6 pricing workshop and gives blunt feedback on demo day pitches.",
    gradient: "linear-gradient(135deg, #c4a5e0, #724e99)",
  },
  {
    initials: "MT",
    name: "Maya T.",
    role: "Mentor · Platform Eng.",
    bio: "Deploys agents behind real production APIs for enterprise clients. Owns the deployment and hardening sessions.",
    gradient: "linear-gradient(135deg, #5c3d82, #050505)",
  },
];

export default function Mentors() {
  return (
    <section className={styles.section} id="mentors">
      <div className="container">
        <RevealOnScroll>
          <div className={styles.head}>
            <span className={`eyebrow ${styles.eyebrow}`}>Who&apos;s teaching</span>
            <h2 className={styles.heading}>Mentors who still build</h2>
            <p className={styles.headSub}>
              Every mentor is an active engineer or founder shipping agents themselves —
              not slide decks away from the work.
            </p>
          </div>
        </RevealOnScroll>

        <div className={styles.grid}>
          {MENTORS.map((m, i) => (
            <RevealOnScroll delay={i * 80} key={m.name}>
              <div className={styles.card}>
                <span className={styles.avatar} style={{ background: m.gradient }}>
                  {m.initials}
                </span>
                <div className={styles.name}>{m.name}</div>
                <div className={styles.role}>{m.role}</div>
                <p className={styles.bio}>{m.bio}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
