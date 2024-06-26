import { useState } from "react";
import styles from './consonants.module.css'

export default function Consonants() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.english}>Consonants </span>
        <span className={styles.korean}>자음</span>
      </div>
      {/* <div>TODO: ADD CONSONANTS </div> */}
    </div>
  )
}
