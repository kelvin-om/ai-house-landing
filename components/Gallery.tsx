import RevealOnScroll from "./RevealOnScroll";
import styles from "./Gallery.module.css";

const GRADIENTS = [
  "linear-gradient(160deg, #9b7bb8 0%, #724e99 100%)",
  "linear-gradient(160deg, #b89fd4 0%, #9b7bb8 100%)",
  "linear-gradient(160deg, #724e99 0%, #4a2880 100%)",
  "linear-gradient(160deg, #c4a5e0 0%, #9b7bb8 100%)",
  "linear-gradient(160deg, #9b7bb8 0%, #5c3d82 100%)",
  "linear-gradient(160deg, #b89fd4 0%, #724e99 100%)",
  "linear-gradient(160deg, #4a2880 0%, #9b7bb8 100%)",
  "linear-gradient(160deg, #c4a5e0 0%, #5c3d82 100%)",
];

const ROW_ONE = [
  "Build night, house floor",
  "Mentor office hours",
  "Cohort demo day",
  "Whiteboard architecture",
  "Pairing on an eval suite",
  "Cohort dinner, week 1",
];

const ROW_TWO = [
  "Live agent showcase",
  "Sketching a pipeline",
  "1:1 code review",
  "Thursday build session",
  "Demo day judging",
  "Mentor pod huddle",
];

function CameraIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13.5" r="3.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Row({ items, reverse, dir }: { items: string[]; reverse?: boolean; dir: 1 | -1 }) {
  const loop = [...items, ...items];
  return (
    <div className={styles.row}>
      <div
        className={`${styles.track} ${reverse ? styles.trackReverse : ""}`}
        aria-hidden="false"
      >
        {loop.map((caption, i) => (
          <div className={styles.tile} key={`${caption}-${i}`}>
            <div
              className={styles.tileBg}
              style={{ background: GRADIENTS[(i + (dir === -1 ? 3 : 0)) % GRADIENTS.length] }}
              aria-hidden="true"
            />
            <span className={styles.tileIcon} aria-hidden="true">
              <CameraIcon />
            </span>
            <span className={styles.placeholderTag}>Photo placeholder</span>
            <div className={styles.tileCaption}>{caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className={styles.section} id="gallery">
      <div className="container">
        <RevealOnScroll>
          <div className={styles.head}>
            <span className={`eyebrow ${styles.eyebrow}`}>Inside the house</span>
            <h2 className={styles.heading}>
              Powered by <em>Organic Engagement</em>
            </h2>
            <p className={styles.headSub}>
              Join a thriving community of builders, mentors, and innovators — a look at
              what happens inside AI House week to week.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      <div className={styles.marquee}>
        <Row items={ROW_ONE} dir={1} />
        <Row items={ROW_TWO} reverse dir={-1} />
      </div>

      <div className="container">
        <p className={styles.note}>// Real cohort photos go here before this ships</p>
      </div>
    </section>
  );
}
