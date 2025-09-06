import { Consonants } from "../components/Consonants"
import { Header } from "../components/Header"
import { Vowels } from "../components/Vowels"
import styles from "../components/home.module.scss"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { hangeul } from "../HangeulData"
import iconBook from "../assets/ico-book.svg"
import icoBrain from "../assets/ico-brain.svg"

export const Home = () => {
  const [selectedConsonantGroups, setSelectedConsonantGroups] = useState([])
  const [selectedVowelGroups, setSelectedVowelGroups] = useState([])
  const navigate = useNavigate()

  const handleConsonantClick = (index) => {
    if (selectedConsonantGroups.includes(index)) {
      setSelectedConsonantGroups(
        selectedConsonantGroups.filter((i) => i !== index)
      )
    } else {
      setSelectedConsonantGroups([...selectedConsonantGroups, index])
    }
  }

  const handleVowelClick = (index) => {
    if (selectedVowelGroups.includes(index)) {
      setSelectedVowelGroups(selectedVowelGroups.filter((i) => i !== index))
    } else {
      setSelectedVowelGroups([...selectedVowelGroups, index])
    }
  }

  const getSelectedCharacters = () => {
    const selectedConsonants = selectedConsonantGroups.flatMap((groupIndex) =>
      hangeul.consonants.slice(groupIndex * 5, groupIndex * 5 + 5)
    )
    const selectedVowels = selectedVowelGroups.flatMap((groupIndex) =>
      hangeul.vowels.slice(groupIndex * 6, groupIndex * 6 + 6)
    )
    return [...selectedConsonants, ...selectedVowels]
  }

  const startQuiz = () => {
    const selectedCharacters = getSelectedCharacters()
    navigate("/quiz", { state: { selectedCharacters } })
  }

  return (
    <div className={styles["home-container"]}>
      {/* <Header />
      <div className={styles.container}>
        <div className={styles.row}>
          <Consonants
            onClick={handleConsonantClick}
            selectedGroups={selectedConsonantGroups}
          />
          <Vowels
            onClick={handleVowelClick}
            selectedGroups={selectedVowelGroups}
          />
        </div>
        <div className={styles.row}>
          <button className={styles.btn} onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      </div> */}
      <div className={styles["home-container__header-container"]}>
        <div className={styles["home-container__header-container__book"]}>
          <img src={iconBook} alt="Icon Book" />
        </div>
        <span className={styles["home-container__header-container__title"]}>
          한글 연습
        </span>
        <span className={styles["home-container__header-container__subtitle"]}>
          Hangeul Practice
        </span>
      </div>
      <div className={styles["home-container__content"]}>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center gap-2">
            <img
              src={icoBrain}
              alt="Icon Brain"
              style={{ width: "1.4rem", height: "1.4rem" }}
            />
            <span className={styles["home-container__content__title"]}>
              Choose Practice Groups
            </span>
          </div>
          <span className={styles["home-container__content__subtitle"]}>
            Select which Korean characters you'd like to practice
          </span>
        </div>
      </div>
    </div>
  )
}
