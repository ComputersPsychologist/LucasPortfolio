import styles from "./Card.module.css"

export default function Card ({
  img = '',
  title = '',
  client = '',
  year = 2024,
  techs = [],
  text = ''
}) {

  return (
    <article className={styles.article}>
      <div className={styles.imgCont}>
        <img src={img} alt="" />
      </div>
      <div className={styles.infoCont}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <div className={styles.clientYear}>
          <span>{client}</span>
          <span>{year}</span>
        </div>
        <div className={styles.techsCont}>
          <h4>Techonologies:</h4>
          {
            techs.map((tech, index) => (
              <span key={index}>
                {tech}
              </span>
            ))
          }
        </div>
        <div>
          <h4>Text About:</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quod sapiente nesciunt enim esse, provident qui eius eligendi doloribus dicta dolorum excepturi rerum facilis dolor nostrum porro minima labore iste?</p>
        </div>
      </div>
      <a href=""> {`See more >>`} </a>
    </article>
  )
}