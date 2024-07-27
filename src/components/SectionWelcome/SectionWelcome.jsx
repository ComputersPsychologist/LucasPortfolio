'use client'
import styles from "./SectionWelcome.module.css"
import ParallaxText from "@/components/ParallaxText/ParallaxText"
import useMarquee from "@/hooks/useMarquee"
import Marquee from "../marquee/Marquee"

export default function SectionWelcome () {

  const {backwardStyle, forwardStyle} = useMarquee()

  return (
    <section className={styles.section}>
      <div className={styles.marqueeCont}>
        {/* <Marquee 
          text={`WEB DEVELOPER`} 
          direction={forwardStyle}
        />
        <Marquee 
          text={`LUCAS WAINSTEIN`} 
          direction={backwardStyle} 
        /> */}
      <ParallaxText 
        text1={"lucas wainstein"}
        text2={"web developer"}
         />
      </div>
      <div className={styles.textCont}>
        <p className={styles.text}>
        Si me das plata puedo llegar a codearte un sitio web
        que cuenta con las tecnologias HTML, CSS y Javascript.
        Puede contener un sistema dinamico realizado con React
        y conectar a una base de datos a traves Node.JS como
        backend. La base de datos utilizada es PostgreSQL.
        </p>
        <a href="#">KEEP IN TOUCH</a>
      </div>
    </section>
  )
}