import styles from "./Card.module.css"

export default function Card ({
  img = '',
  title = '',
  client = '',
  year = 2024,
  //techs: [0] = name , [1] = filename
  techs = [],
  text = ''
}) {

  return (
    <article className={styles.article}>
      <div className={styles.imgCont}>
        <img src={img} alt="project image" />
      </div>
      <div className={styles.infoCont}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <div className={styles.clientYear}>
          <span>Client:{client}</span>
          <br />
          <span>Year:{year}</span>
        </div>
        <div className={styles.techsCont}>
          <h4>· Tools:</h4>
          {
            techs.map((tech, index) => (
              <span key={index}>
                {tech[0]}
                <img className={styles.techIcon} src={`/techs/${tech[1]}Color.svg`} alt="tool icon" />
              </span>
            ))
          }
        </div>
        <div className={styles.textCont}>
          <h4>· About the project</h4>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quod sapiente nesciunt enim esse, provident qui eius eligendi doloribus dicta dolorum excepturi rerum facilis dolor nostrum porro minima labore iste?</p>
        </div>
      </div>
      <div className={styles.linksCont}>
          <a href="#">
            <img src="/techs/web.svg" alt="website link icon" />
            <span>Website</span>
          </a>
          <a href="#">
            <img src="/techs/githubColor.svg" alt="github link icon" />
            <span>Github</span>
          </a>
      </div>
    </article>
  )
}