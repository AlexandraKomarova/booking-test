import styles from '../styles/PurposeMobile.module.css'
import GreenHalfCircleTopMobile from './GreenHalfCircleTopMobile'
import { motion } from 'framer-motion'
import { purposeVariants } from '../animations/bookingAnimations.js'

const PurposeMobile = () => {
  return (
    <motion.div className={styles.container}
      variants={purposeVariants}
      initial="hidden"
      animate="visible">
      <div className={styles.greenCircleTop}>
        <GreenHalfCircleTopMobile />
      </div>
      <div className={styles.purpose}>
        <div>book your purpose</div>
      </div>
    </motion.div>
  )
}

export default PurposeMobile
