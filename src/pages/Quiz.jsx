import { Header } from "../components/Header"
import { useLocation } from "react-router-dom"
import React, { useState, useEffect } from "react"
import styles from "./quiz.module.scss"
import { useNavigate } from "react-router-dom"

export const Quiz = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { selectedCharacters } = location.state
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [character, setCharacter] = useState(null)
  const [options, setOptions] = useState([])

  // Function to shuffle an array (Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  // Function to generate a question
  const generateQuestion = () => {
    if (
      currentQuestion >= 10 ||
      !selectedCharacters ||
      selectedCharacters.length < 1
    )
      return

    // Select a random character
    const randomIndex = Math.floor(Math.random() * selectedCharacters.length)
    const character = selectedCharacters[randomIndex]
    if (!character) return

    const correctAnswer = character.name

    // Generate two wrong answers
    let wrongAnswers = selectedCharacters
      .filter((char) => char.name !== correctAnswer)
      .map((char) => char.name)

    // Shuffle and pick two wrong answers
    wrongAnswers = shuffleArray(wrongAnswers).slice(0, 2)

    // Shuffle the correct answer with wrong answers
    const options = shuffleArray([...wrongAnswers, correctAnswer])

    setCharacter(character)
    setOptions(options)
  }

  // Function to handle answer selection
  const handleAnswerClick = (answer) => {
    if (answer === character.name) {
      setScore(score + 1)
    }
    setCurrentQuestion(currentQuestion + 1)
  }

  // Generate a new question on component mount and when current question changes
  useEffect(() => {
    generateQuestion()
  }, [currentQuestion])

  const handleBack = () => {
    navigate("/")
  }

  return (
    <>
      <Header />
      <div className={styles.quizContainer}>
        <div className={styles.insideContainer}>
          {currentQuestion <= 10 && character ? (
            <>
              <div className={styles.character}>
                <h1>{character.char}</h1>
              </div>
              <div className={styles.options}>
                {options.map((option, index) => (
                  <button
                    key={index}
                    className={styles.optionButton}
                    onClick={() => handleAnswerClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.results}>
              <h2>Quiz Finished!</h2>
              <p>Your Score: {score} / 10</p>
              <button onClick={handleBack} className={styles.optionButton}>
                Go Back
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
