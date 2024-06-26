import { useState } from "react";
import styles from './consonants.module.css'
import { hangeul } from '../HangeulData';

export default function Consonants() {

  const renderConsonants = () => {
    return hangeul.consonants.slice(0, 5).map(consonant => (
      <div key={consonant.id} className={styles.consonantItem}>
        {consonant.char}
      </div>
    ));
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.english}>Consonants </span>
        <span className={styles.korean}>자음</span>
      </div>
      <div className={styles.consonantsGrid}>
        {renderConsonants()}
      </div>
    </div>
  )
}
