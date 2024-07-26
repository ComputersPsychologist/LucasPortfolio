
import styles from "./SectionProjects.module.css"

export default function SectionProjects ({children}) {


  return (
    <div className={styles.section}>
      {children}
    </div>
  )
}