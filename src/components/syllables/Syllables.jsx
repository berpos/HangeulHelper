import styles from "./syllables.module.scss"
import icoEmptyCheckbox from "../../assets/ico-checkbox-empty.svg"
import icoCheckedCheckbox from "../../assets/ico-checkbox.svg"

export const Syllables = ({ onGroupToggle, selectedGroups }) => {
  const isSelected = selectedGroups.includes("syllables")

  return (
    <div className={styles["syllables-container"]}>
      <div className="d-flex align-items-center gap-3">
        <img
          src={isSelected ? icoCheckedCheckbox : icoEmptyCheckbox}
          alt={isSelected ? "Checked" : "Unchecked"}
          onClick={() => onGroupToggle("syllables")}
        />
        <div className="flex-1">
          <div className={styles["syllables-container__title"]}>
            Syllables (음절)
          </div>
          <div className={styles["syllables-container__list"]}>
            가, 나, 다, 라, 마, 바...
          </div>
        </div>
      </div>
    </div>
  )
}
