import styles from "./SectionTemplate.module.css"
// color must equals to 'white' or 'black' magick word
// imgNum range 1-4
export default function SectionTemplate ({children, title, sub, imgNum, color}) {

  const template = {
    backgroundColor: `${color}`,
    color: `${color === 'white' ? 'black' : 'white'}`,
  }

  const numTemplate = {backgroundImage: `url('/${imgNum}.png')`}

  const word = title.split(' ')

  return (
    <section className={styles.section} style={template}>
      <div className={styles.titleCont} style={numTemplate}>
        <h3>{word[0]}</h3>
        <h3>{`${word[1]} ${word[2]}`}</h3>
        <span>{sub}</span>
      </div>
      {children}
    </section>
  )
}