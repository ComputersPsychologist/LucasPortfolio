import styles from "./Footer.module.css"

export default function Footer ({socialMediaIcons = []}) {

  // mandatory order: (1)social media name (2)img dir (3)link
  const icons = [
    ['youtube', 'youtube_white.svg', '#'],
    ['linkedin', 'linkedin_white.svg', '#'],
    ['facebook', 'fb_white.svg', '#'],
    ['be','behance_white.svg','#'],
    ['instagram','insta_white.svg','#'],
    ['twitter','twitter_white.svg','#'],
    ['pinterest','pinterest_white.svg','#'],
    ['yelp','yelp_white.svg','#'],
    ['tiktok','tiktok_white.svg','#']
  ]

  return (
    <footer className={styles.footer}>
      
      <div className={styles.titleCont}>
        <h2>HAVE A PROJECT IN MIND?</h2>  
        <span>BRING IT ON</span>
      </div>
      <div className={styles.hr}></div>
      <img src="/cat.png" alt="my logo" />
      
      <div className={styles.icons}>
        {
          icons.map((icon, index) => (
            <a href={icon[3]}>
              <img 
                src={`/socialmedia/${icon[1]}`}
                alt={icon[0]}
              />
            </a>
          ))
        }
      </div>
      
      <div className={styles.randomTextCont}>
        <span>Glandale Plaza</span>
        <span>San Juan 1298, Mar del Plata. Argentina.</span>
        <span>General Pueyrredón, AR7600</span>
      </div>
      <div className={styles.reservedRigths}>
        <span>© Lucas Wainstein Agency.</span>
        <span>2024-2038 All rights resverd.</span>
      </div>
    </footer>
  )
}