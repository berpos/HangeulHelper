import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import styles from "./quiz.module.scss"
import icoBack from "../../assets/ico-back.svg"

export const Quiz = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { selectedCharacters } = location.state || {}

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState({ correct: 0, incorrect: 0 })

  // Shuffle array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  // Generate quiz questions
  useEffect(() => {
    if (!selectedCharacters || selectedCharacters.length === 0) return

    const generateQuestions = () => {
      const numQuestions = Math.min(14, selectedCharacters.length)
      const questionsList = []

      for (let i = 0; i < numQuestions; i++) {
        const randomChar =
          selectedCharacters[
            Math.floor(Math.random() * selectedCharacters.length)
          ]
        const correctAnswer = randomChar.name

        let wrongAnswers = selectedCharacters
          .filter((c) => c.name !== correctAnswer)
          .map((c) => c.name)
        wrongAnswers = shuffleArray(wrongAnswers).slice(0, 2)

        const options = shuffleArray([...wrongAnswers, correctAnswer])

        questionsList.push({
          character: randomChar,
          options,
          correctAnswer,
        })
      }

      setQuestions(questionsList)
    }

    generateQuestions()
  }, [selectedCharacters])

  const handleAnswerClick = (answer) => {
    if (showResult) return
    setSelectedAnswer(answer)
    const isCorrect = answer === questions[currentIndex].correctAnswer
    setScore((prev) => ({
      ...prev,
      [isCorrect ? "correct" : "incorrect"]:
        prev[isCorrect ? "correct" : "incorrect"] + 1,
    }))
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      navigate("/results", { state: { score } })
    }
  }

  const handleBack = () => {
    navigate("/")
  }

  if (!questions.length) {
    return (
      <div className={styles["quiz-container"]}>
        <div className={styles["quiz-loading"]}>Preparing your quiz...</div>
      </div>
    )
  }

  const current = questions[currentIndex]
  const progress = ((currentIndex + 1) / questions.length) * 100

  return (
    <div className={styles["quiz-container"]}>
      <div className={styles["quiz-container__header"]}>
        <div
          className={styles["quiz-container__header__button-container"]}
          onClick={handleBack}
        >
          <img src={icoBack} alt="Back" />
          <span>Back</span>
        </div>
        <div className={styles["quiz-container__header__progress"]}>
          Question {currentIndex + 1} / {questions.length}
        </div>
      </div>
      <div className={styles["quiz-container__progress-bar"]}>
        <div
          className={styles["quiz-container__progress-bar__fill"]}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className={styles["quiz-container__question"]}>
        <div className={styles["quiz-container__question__character"]}>
          {console.log(current.character)}
          {current.character.char}
        </div>
        <p className={styles["quiz-container__question__subtitle"]}>
          What is the romanization of this character?
        </p>
      </div>

      <div className={styles["quiz-container__options"]}>
        {current.options.map((option, index) => {
          let optionClass = styles["quiz-container__options__option-button"]
          if (showResult) {
            if (option === current.correctAnswer) {
              optionClass += ` ${styles.correct}`
            } else if (selectedAnswer === option) {
              optionClass += ` ${styles.incorrect}`
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className={optionClass}
              disabled={showResult}
            >
              {option}
            </button>
          )
        })}
      </div>

      {showResult && (
        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={handleNext}
            className={styles["quiz-container__next-button"]}
          >
            {currentIndex < questions.length - 1
              ? "Next Question"
              : "View Results"}
          </button>
        </div>
      )}
    </div>
  )
}
