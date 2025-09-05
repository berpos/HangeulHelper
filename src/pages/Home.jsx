import { Consonants } from "../components/Consonants"
import { Header } from "../components/Header"
import { Vowels } from "../components/Vowels"
import styles from "../components/home.module.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { hangeul } from "../HangeulData"

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
    <>
      <Header />
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
      </div>
    </>
  )
}
