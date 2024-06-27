import styles from './consonants.module.css';
import { hangeul } from '../HangeulData';

export default function Consonants({ onClick, selectedGroups }) {

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
            <button className={styles.btn} onClick={() => onClick(index)}>
              {selectedGroups.includes(index) ? 'Deselect' : 'Select'}
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
      {/* {selectedGroups.length > 0 && (
        <div className={styles.flashcards}>
          <h2>Selected Groups</h2>
          {selectedGroups.map(selectedIndex => (
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
