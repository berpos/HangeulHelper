import styles from "./consonants.module.scss"
import icoEmptyCheckbox from "../../assets/ico-checkbox-empty.svg"
import icoCheckedCheckbox from "../../assets/ico-checkbox.svg"

export const Consonants = ({ onGroupToggle, selectedGroups }) => {
  const isSelected = selectedGroups.includes("consonants")

  return (
    <div className={styles["consonants-container"]}>
      <div className="d-flex align-items-center gap-3">
        <img
          src={isSelected ? icoCheckedCheckbox : icoEmptyCheckbox}
          alt={isSelected ? "Checked" : "Unchecked"}
          onClick={() => onGroupToggle("consonants")}
        />
        <div className="flex-1">
          <div className={styles["consonants-container__title"]}>
            Consonants (자음)
          </div>
          <div className={styles["consonants-container__list"]}>
            ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ...
          </div>
        </div>
      </div>
    </div>
  )
}
