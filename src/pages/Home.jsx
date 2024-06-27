import Consonants from "../components/Consonants";
import Header from "../components/Header";
import Vowels from "../components/Vowels";
import styles from '../components/home.module.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [selectedConsonantGroups, setSelectedConsonantGroups] = useState([]);
  const [selectedVowelGroups, setSelectedVowelGroups] = useState([]);
  const navigate = useNavigate();

  const handleConsonantClick = (index) => {
    if (selectedConsonantGroups.includes(index)) {
      setSelectedConsonantGroups(selectedConsonantGroups.filter((i) => i !== index));
    } else {
      setSelectedConsonantGroups([...selectedConsonantGroups, index]);
    }
  };

  const handleVowelClick = (index) => {
    if (selectedVowelGroups.includes(index)) {
      setSelectedVowelGroups(selectedVowelGroups.filter((i) => i !== index));
    } else {
      setSelectedVowelGroups([...selectedVowelGroups, index]);
    }
  };

  const startQuiz = () => {
    navigate('/quiz', { state: { selectedConsonantGroups, selectedVowelGroups } });
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.row}>
          <Consonants onClick={handleConsonantClick} selectedGroups={selectedConsonantGroups} />
          <Vowels onClick={handleVowelClick} selectedGroups={selectedVowelGroups} />
        </div>
        <div className={styles.row}>
          <button className={styles.btn} onClick={startQuiz}>Start Quiz</button>
        </div>
      </div>
    </>
  )
}
