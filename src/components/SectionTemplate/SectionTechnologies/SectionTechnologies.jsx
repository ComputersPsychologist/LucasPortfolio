'use client'
import styles from "./SectionTechnologies.module.css"
import { Tooltip } from "react-tooltip"
import { useRef, useEffect, useState } from 'react';

export default function SectionTechnologies ({techsArray}) {

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.section} >
      <div className={`${styles.techscont}`} ref={elementRef} >
        {
          techsArray.map((tech, index) => (
            <div className={`${styles.oneTechCont} ${isVisible ? styles.intersecting : ''}`} style={{ animationDelay: `${index * 200}ms` }} key={index}>
              <img
                src={`/techs/${tech}.svg`} 
                alt={`${tech} icon`} 
                className={`${styles.icon} ${tech === 'react' ? styles.animate : ''}`}
                data-tooltip-id="my-tooltip" 
                data-tooltip-content={`${tech.charAt(0).toUpperCase() + tech.slice(1)}`}
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