import styles from '../styles/NextBtn.module.css'
import GreenHalfCircleBottomSvg from "./GreenHalfCircleBottomSvg"

const NextBtn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.greenHalfCircleBottom}>
        <GreenHalfCircleBottomSvg />
      </div>
      <span className={styles.next}>next</span>
    </div>
  )
}

export default NextBtn
