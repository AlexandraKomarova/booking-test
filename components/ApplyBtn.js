import styles from '../styles/ApplyBtn.module.css'
import { motion } from 'framer-motion'
import { applyBtnVariants } from '../animations/bookingAnimations.js'

const ApplyBtn = () => {
  return (
    <motion.div className={styles.btn}
      variants={applyBtnVariants}
      initial="hidden"
      animate="visible">
      <div>apply</div>
    </motion.div>
  )
}

export default ApplyBtn
