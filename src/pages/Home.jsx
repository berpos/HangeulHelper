import Consonants from "../components/Consonants";
import Vowels from "../components/Vowels";
import styles from '../components/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Consonants />
        <Vowels />
      </div>
      <div className={styles.row}>
        <button className={styles.btn}>Start Quiz</button>
      </div>
    </div>
  )
}
