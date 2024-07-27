
import styles from "./SectionProjects.module.css"

export default function SectionProjects ({children}) {


  return (
    <div className={styles.section}>
      {children}
      <button>
        {"DISCOVER ALL"}
        <img src="/right-arrow.svg" alt="right arrow icon" />
      </button>
    </div>
  )
}