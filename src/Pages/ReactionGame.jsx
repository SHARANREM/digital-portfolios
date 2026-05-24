import { useEffect, useRef, useState } from "react";
import styles from "../GlobalUI/About.module.scss";

export default function ReactionGame() {
  const [status, setStatus] = useState("idle");
  const [reactionTime, setReactionTime] = useState(null);

  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  const startGame = () => {
    setStatus("waiting");
    setReactionTime(null);

    const randomDelay =
      Math.floor(Math.random() * 4000) + 2000;

    timerRef.current = setTimeout(() => {
      setStatus("ready");
      startTimeRef.current = Date.now();
    }, randomDelay);
  };

  const handleClick = () => {
    // TOO EARLY
    if (status === "waiting") {
      clearTimeout(timerRef.current);

      setStatus("tooSoon");
      return;
    }

    // REACTION
    if (status === "ready") {
      const endTime = Date.now();
      const reaction = endTime - startTimeRef.current;

      setReactionTime(reaction);
      setStatus("finished");
      return;
    }

    // RESET
    startGame();
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className={styles.reactionWrapper}>

      <div
        className={`
          ${styles.reactionBox}
          ${status === "ready" ? styles.active : ""}
          ${status === "tooSoon" ? styles.fail : ""}
        `}
        onClick={handleClick}
      >

        {status === "idle" && (
          <>
            <h2>Reaction Speed Test</h2>
            <p>Click to Start</p>
          </>
        )}

        {status === "waiting" && (
          <>
            <h2>Wait for the color...</h2>
            <p>Do NOT click early 👀</p>
          </>
        )}

        {status === "ready" && (
          <>
            <h2>CLICK NOW!</h2>
            <p>⚡⚡⚡</p>
          </>
        )}

        {status === "tooSoon" && (
          <>
            <h2>TOO EARLY 😭</h2>
            <p>Click to Try Again</p>
          </>
        )}

        {status === "finished" && (
          <>
            <h2>{reactionTime} ms</h2>

            <p>
              {reactionTime < 180
                ? "Bro is NOT human 💀"
                : reactionTime < 250
                ? "Fast Reflexes ⚡"
                : reactionTime < 350
                ? "Average Human 🧍"
                : "Windows Update Reflexes 🐌"}
            </p>

            <span>Click to Play Again</span>
          </>
        )}

      </div>
    </div>
  );
}