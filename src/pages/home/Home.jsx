import { Consonants } from "../../components/consonants/Consonants"
import { Vowels } from "../../components/vowels/Vowels"
import styles from "./home.module.scss"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { hangeul } from "../../HangeulData"
import iconBook from "../../assets/ico-book.svg"
import icoBrain from "../../assets/ico-brain.svg"

export const Home = () => {
  const [selectedGroups, setSelectedGroups] = useState([])
  const navigate = useNavigate()

  const handleGroupToggle = (group) => {
    if (selectedGroups.includes(group)) {
      setSelectedGroups(selectedGroups.filter((g) => g !== group))
    } else {
      setSelectedGroups([...selectedGroups, group])
    }
  }

  const getSelectedCharacters = () => {
    const selectedConsonants = selectedGroups.includes("consonants")
      ? hangeul.consonants
      : []
    const selectedVowels = selectedGroups.includes("vowels")
      ? hangeul.vowels
      : []
    return [...selectedConsonants, ...selectedVowels]
  }

  const startQuiz = () => {
    const selectedCharacters = getSelectedCharacters()
    if (selectedCharacters.length > 0) {
      navigate("/quiz", { state: { selectedCharacters } })
    }
  }

  return (
    <div className={styles["home-container"]}>
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
              style={{ width: "1.8rem", height: "1.8rem" }}
            />
            <span className={styles["home-container__content__title"]}>
              Choose Practice Groups
            </span>
          </div>
          <span className={styles["home-container__content__subtitle"]}>
            Select which Korean characters you'd like to practice
          </span>
        </div>
        <div className="mt-3 d-flex flex-column gap-3">
          <Vowels
            onGroupToggle={handleGroupToggle}
            selectedGroups={selectedGroups}
          />
          <Consonants
            onGroupToggle={handleGroupToggle}
            selectedGroups={selectedGroups}
          />
          <div
            className={`${styles["home-container__content__start-quiz"]} ${
              selectedGroups.length === 0 ? styles.disabled : ""
            }`}
            onClick={startQuiz}
            disabled={selectedGroups.length === 0}
          >
            Start Practice
          </div>
        </div>
      </div>
      <div className={styles["home-container__footer"]}>
        <span>
          Practice Korean characters with flashcards and multiple choice
          questions
        </span>
      </div>
    </div>
  )
}
