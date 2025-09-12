import styles from "./vowels.module.scss"
import { hangeul } from "../../HangeulData"
import icoEmptyCheckbox from "../../assets/ico-checkbox-empty.svg"
import icoCheckedCheckbox from "../../assets/ico-checkbox.svg"

export const Vowels = ({ onGroupToggle, selectedGroups }) => {
  const isSelected = selectedGroups.includes("vowels")

  return (
    <div className={styles["vowels-container"]}>
      <div className="d-flex align-items-center gap-3">
        <img
          src={isSelected ? icoCheckedCheckbox : icoEmptyCheckbox}
          alt={isSelected ? "Checked" : "Unchecked"}
          onClick={() => onGroupToggle("vowels")}
        />
        <div className="flex-1">
          <div className={styles["vowels-container__title"]}>Vowels (모음)</div>
          <div className={styles["vowels-container__list"]}>
            ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ ...
          </div>
        </div>
      </div>
    </div>
  )
}
