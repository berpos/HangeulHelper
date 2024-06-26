import styles from './vowels.module.css';
import { hangeul } from '../HangeulData';


export default function Vowels() {

  const groupVowels = () => {
    const groups = [];
    for (let i = 0; i < hangeul.vowels.length; i += 6) {
      groups.push(hangeul.vowels.slice(i, i + 6));
    }

    return (
      <div>
        {groups.map((group, index) => (
          <div key={index}>
            {group.map(vowel => (
              <div key={vowel.id} className={styles.vowelItem}>
                {vowel.char}
              </div>
            ))}
            {index < groups.length - 1 && <hr className={styles.line} />}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.english}>Vowels </span>
        <span className={styles.korean}>모음</span>
      </div>
      <div className={styles.consonantsGrid}>
        {groupVowels()}
      </div>
    </div>
  )
}
