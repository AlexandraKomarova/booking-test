import GreenCircleTopSvg from "./GreenCircleTopSvg"
import styles from '../styles/Purpose.module.css'
import { motion } from 'framer-motion'
import { purposeVariants } from '../animations/bookingAnimations.js'

const Purpose = () => {
  return (
    <motion.div className={styles.container}
      variants={purposeVariants}
      initial="hidden"
      animate="visible">
      <div className={styles.greenCircleTop}>
        <GreenCircleTopSvg />
      </div>
      <div className={styles.purpose}>
        <div>book your purpose</div>
      </div>
    </motion.div>
  )
}

export default Purpose
