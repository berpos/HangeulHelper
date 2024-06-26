import styles from './vowels.module.css';

export default function Vowels() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.english}>Vowels </span>
        <span className={styles.korean}>모음</span>
      </div>
      {/* <div>TODO: ADD VOWELS</div> */}
    </div>
  )
}
