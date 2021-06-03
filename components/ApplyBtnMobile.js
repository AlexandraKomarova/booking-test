import styles from '../styles/ApplyBtnMobile.module.css'
import { motion } from 'framer-motion'
import { applyBtnVariants } from '../animations/bookingAnimations.js'

const ApplyBtnMobile = () => {
  return (
    <motion.div className={styles.btn}
      variants={applyBtnVariants}
      initial="hidden"
      animate="visible">
      <div>apply</div>
    </motion.div>
  )
}

export default ApplyBtnMobile
