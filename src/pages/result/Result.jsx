import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styles from "./result.module.scss"
import icoTrophy from "../../assets/ico-trophy.svg"
import icoBack from "../../assets/ico-back.svg"
import icoCorrect from "../../assets/ico-correct.svg"
import icoWrong from "../../assets/ico-wrong.svg"

export const Results = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { score, selectedGroups = [] } = location.state || {
    score: { correct: 0, incorrect: 0 },
    selectedGroups: [],
  }
  const { correct, incorrect } = score

  const total = correct + incorrect
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0

  const getPerformanceMessage = () => {
    if (percentage >= 90)
      return {
        message: "Outstanding! 완벽해요!",
        emoji: "🎉",
        color: "success",
      }
    if (percentage >= 80)
      return {
        message: "Excellent work! 잘했어요!",
        emoji: "🌟",
        color: "success",
      }
    if (percentage >= 70)
      return { message: "Good job! 좋아요!", emoji: "👏", color: "primary" }
    if (percentage >= 60)
      return {
        message: "Keep practicing! 화이팅!",
        emoji: "💪",
        color: "neutral",
      }
    return {
      message: "Don't give up! 포기하지 마세요!",
      emoji: "📚",
      color: "muted",
    }
  }

  const performance = getPerformanceMessage()

  const getLearningFacts = () => {
    const facts = [
      "Hangeul syllables are built in blocks, usually initial consonant + vowel (+ optional final consonant).",
      "A complete Hangeul syllable can be represented as choseong + jungseong + jongseong.",
      "Korean writing is read left to right, but each syllable block is read as one unit.",
    ]

    if (selectedGroups.includes("consonants")) {
      facts.push(
        "Consonants change sound by position: for example, ㄱ can sound like g or k depending on context.",
      )
    }

    if (selectedGroups.includes("vowels")) {
      facts.push(
        "Complex vowels are combinations of simple vowels, like ㅘ (wa) = ㅗ + ㅏ.",
      )
    }

    if (selectedGroups.includes("syllables")) {
      facts.push(
        "Modern Hangeul has 11,172 possible precomposed syllable blocks (from 가 to 힣).",
      )
    }

    return facts
  }

  const learningFacts = getLearningFacts()

  const handleRestart = () => navigate(-1)
  const handleHome = () => navigate("/")

  return (
    <div className={styles["results-container"]}>
      <div className={styles["results-container__header"]}>
        <div className={styles["results-container__header__trophy"]}>
          <img src={icoTrophy} alt="Trophy Icon" />
        </div>
        <span className={styles["results-container__header__title"]}>
          Quiz Complete!
        </span>
        <span
          className={`${styles["results-container__header__subtitle"]} ${
            styles[performance.color]
          }`}
        >
          {performance.message} {performance.emoji}
        </span>
      </div>
      <div className={styles["results-container__card"]}>
        <div className={styles["results-container__card__score"]}>
          <div className={styles["results-container__card__score__circle"]}>
            <div className="d-flex flex-column align-items-center justify-content-center ">
              <span
                className={
                  styles["results-container__card__score__circle__percentage"]
                }
              >
                {percentage}%
              </span>
            </div>
          </div>
        </div>
        <div className={styles["results-container__card__stats"]}>
          <div
            className={`${styles["results-container__card__stats__container"]} ${styles.correct}`}
          >
            <div className="d-flex align-items-center gap-1">
              <img
                src={icoCorrect}
                alt="Correct Icon"
                style={{ width: "1.2rem", height: "1.2rem" }}
              />
              <span>Correct</span>
            </div>
            <span style={{ fontWeight: "bold" }}>{correct}</span>
          </div>
          <div
            className={`${styles["results-container__card__stats__container"]} ${styles.incorrect}`}
          >
            <div className="d-flex align-items-center gap-1">
              <img
                src={icoWrong}
                alt="Wrong Icon"
                style={{ width: "1.2rem", height: "1.2rem" }}
              />
              <span>Incorrect</span>
            </div>
            <span style={{ fontWeight: "bold" }}>{incorrect}</span>
          </div>
        </div>
        <div className={styles["results-container__card__buttons"]}>
          <div
            className={styles["results-container__card__buttons__restart"]}
            onClick={handleRestart}
          >
            <img
              src={icoBack}
              alt="Back Icon"
              style={{ width: "1.2rem", height: "1.2rem", filter: "invert(1)" }}
            />
            <span>Practice Again</span>
          </div>
          <div
            className={styles["results-container__card__buttons__home"]}
            onClick={handleHome}
          >
            <span>Back to Home</span>
          </div>
        </div>
        <span className={styles["results-container__card__footer"]}>
          {percentage < 80
            ? "Regular practice makes perfect! Keep going!"
            : "Great job! You're mastering Korean characters!"}
        </span>
        <div className={styles["results-container__card__facts"]}>
          <div className={styles["results-container__card__facts__title"]}>
            Hangeul Facts
          </div>
          <ul className={styles["results-container__card__facts__list"]}>
            {learningFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
