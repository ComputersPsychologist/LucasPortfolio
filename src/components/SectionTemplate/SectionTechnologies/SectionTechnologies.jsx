'use client'

import styles from "./SectionTechnologies.module.css"
import { Tooltip } from "react-tooltip"

const Hola = () => {
  return (
    <span>Hi world</span>
  )
}

export default function SectionTechnologies ({techsArray}) {



  return (
    <div className={styles.section}>
      <div className={styles.techscont}>
        {
          techsArray.map((tech, index) => (
            <div className={styles.oneTechCont}>
              <img
              src={`/techs/${tech}.svg`} 
              alt={`${tech} icon`} 
              key={index}
              className={styles.icon}
              data-tooltip-id="my-tooltip" 
              data-tooltip-content={Hola}
              />
              <span>{tech}</span>
            </div>
          ))
        }
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  )
}