import Nav from "../Nav/Nav"
import styles from "./Header.module.css"

export default function Header () {
  return (
    <header className={styles.header}>
      
      <div className={styles.topCont}>
        <div className={styles.logo}>
          <a href="#">MY|PORTFOLIO</a>
        </div>
        <Nav />
      </div>

      <div className={styles.headerBotCont}>
        <div className={styles.botCont1}>
          <p>creativity</p>
          <p>that actually</p>
          <p>pays off</p>
        </div>
      </div>

      <div className={styles.text}>
        <p>We're a leading global creative company with a focus on  Branding, Design, Marketing, Web design and Development.</p>
      </div>
    
    </header>
  )
}