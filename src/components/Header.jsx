import styles from "./header.module.css"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate("/")
  }

  return (
    <div className={styles.header}>
      <p className={styles.p} onClick={handleBack}>
        Hangeul Helper
      </p>
    </div>
  )
}
