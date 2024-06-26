import { useState } from "react";
import styles from './consonants.module.css';
import { hangeul } from '../HangeulData';

export default function Consonants() {

  const groupConsonants = () => {
    const groups = [];
    for (let i = 0; i < hangeul.consonants.length; i += 5) {
      groups.push(hangeul.consonants.slice(i, i + 5));
    }

    return (
      <>
        {groups.map((group, index) => (
          <div key={index} className={styles.containers}>
            <button className={styles.btn}>Check</button>
            {group.map(consonant => (
              <div key={consonant.id} className={styles.consonantItem}>
                {consonant.char}
              </div>
            ))}
            {index < groups.length - 1 && <hr className={styles.line} />}
          </div>
        ))}
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.english}>Consonants </span>
        <span className={styles.korean}>자음</span>
      </div>
      <div className={styles.consonantsGrid}>
        {groupConsonants()}
      </div>
    </div>
  )
}
