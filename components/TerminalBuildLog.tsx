"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TerminalBuildLog.module.css";

type Line = {
  prompt?: string;
  text: string;
  tone?: "default" | "muted" | "success";
  pause?: number;
};

const SCRIPT: Line[] = [
  { prompt: "$", text: "ai-house new agent --idea \"campus event finder\"" },
  { text: "scaffolding agent workspace...", tone: "muted" },
  { text: "✓ tools: search, calendar, sms", tone: "success" },
  { prompt: "$", text: "ai-house build --track agent-builder" },
  { text: "wiring memory + eval harness...", tone: "muted" },
  { text: "✓ 14/14 eval cases passing", tone: "success" },
  { prompt: "$", text: "ai-house ship --demo-day", pause: 600 },
  { text: "✓ deployed — demo day, friday 6pm", tone: "success" },
];

export default function TerminalBuildLog() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisibleCount(SCRIPT.length);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            runScript();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function runScript() {
    let lineIndex = 0;

    function typeLine() {
      if (lineIndex >= SCRIPT.length) return;
      const line = SCRIPT[lineIndex];
      const full = line.text;
      let char = 0;
      setVisibleCount(lineIndex + 1);
      setCharCount(0);

      const speed = line.prompt ? 32 : 14;
      const typer = setInterval(() => {
        char += 1;
        setCharCount(char);
        if (char >= full.length) {
          clearInterval(typer);
          lineIndex += 1;
          setTimeout(typeLine, line.pause ?? 260);
        }
      }, speed);
    }

    typeLine();
  }

  return (
    <div className={styles.window} ref={containerRef}>
      <div className={styles.titleBar}>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
        <span className={styles.fileName}>agent-builder — zsh</span>
      </div>
      <div className={styles.body}>
        {SCRIPT.slice(0, visibleCount).map((line, i) => {
          const isCurrent = i === visibleCount - 1;
          const text = isCurrent ? line.text.slice(0, charCount) : line.text;
          return (
            <p
              key={i}
              className={`${styles.line} ${
                line.tone === "success" ? styles.success : line.tone === "muted" ? styles.muted : ""
              }`}
            >
              {line.prompt && <span className={styles.prompt}>{line.prompt}</span>}
              {text}
              {isCurrent && charCount < line.text.length && <span className={styles.cursor} />}
            </p>
          );
        })}
        {visibleCount === SCRIPT.length && <span className={styles.cursorBlink} />}
      </div>
    </div>
  );
}
