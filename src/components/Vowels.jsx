import styles from './vowels.module.css';
import { hangeul } from '../HangeulData';


export default function Vowels({ onClick, selectedGroups }) {

  const groupVowels = () => {
    const groups = [];
    for (let i = 0; i < hangeul.vowels.length; i += 6) {
      groups.push(hangeul.vowels.slice(i, i + 6));
    }
    return groups;
  };

  const groups = groupVowels();

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.english}>Vowels </span>
        <span className={styles.korean}>모음</span>
      </div>
      <div className={styles.vowelsGrid}>
        {groups.map((group, index) => (
          <div key={index} className={styles.containers}>
            <button className={styles.btn} onClick={() => onClick(index)}>
              {selectedGroups.includes(index) ? 'Deselect' : 'Select'}
            </button>
            {group.map(vowel => (
              <p key={vowel.id} className={styles.vowelItem}>
                {vowel.char}
              </p>
            ))}
            {index < groups.length - 1 && <hr className={styles.line} />}
          </div>
        ))}
      </div>
    </div>
  )
}
