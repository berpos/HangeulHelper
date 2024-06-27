import { useState } from "react";
import styles from './consonants.module.css';
import { hangeul } from '../HangeulData';

export default function Consonants() {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState([]);

  const handleClick = (index) => {
    if (selectedGroupIndex.includes(index)) {
      setSelectedGroupIndex(selectedGroupIndex.filter(i => i !== index));
    } else {
      setSelectedGroupIndex([...selectedGroupIndex, index]);
    }
  };

  const groupConsonants = () => {
    const groups = [];
      for (let i = 0; i < hangeul.consonants.length; i += 5) {
        groups.push(hangeul.consonants.slice(i, i + 5));
      }
      return groups;
    };

    const groups = groupConsonants();

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.english}>Consonants </span>
        <span className={styles.korean}>자음</span>
      </div>
      <div className={styles.consonantsGrid}>
        {groups.map((group, index) => (
          <div key={index} className={styles.containers}>
            <button className={styles.btn} onClick={() => handleClick(index)}>
              {selectedGroupIndex.includes(index) ? 'Uncheck' : 'Check'}
            </button>
            {group.map(consonant => (
              <p key={consonant.id} className={styles.consonantItem}>
                {consonant.char}
              </p>
            ))}
            {index < groups.length - 1 && <hr className={styles.line} />}
          </div>
        ))}
      </div>
      {/* {selectedGroupIndex.length > 0 && (
        <div className={styles.flashcards}>
          <h2>Selected Groups</h2>
          {selectedGroupIndex.map(selectedIndex => (
            <div key={selectedIndex}>
              {groups[selectedIndex].map(consonant => (
                <div key={consonant.id} className={styles.flashcard}>
                  {consonant.char}
                </div>
              ))}
              <hr className={styles.line} />
            </div>
          ))}
        </div>
      )} */}
    </div>
  )
}
