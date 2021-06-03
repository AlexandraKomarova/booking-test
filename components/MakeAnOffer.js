import styles from '../styles/MakeAnOffer.module.css'
import { motion } from 'framer-motion'
import { circleVariants, titleVariants, textVariants } from '../animations/bookingAnimations.js'

const MakeAnOffer = () => {
  return (
    <motion.div className={styles.container}
      initial="hidden"
      animate="visible">
      <motion.div className={styles.circle} variants={circleVariants}></motion.div>
      <motion.div className={styles.title} variants={titleVariants}>
        make an offer
      </motion.div>
      <motion.div className={styles.text} variants={textVariants}>
        Explore this opportunity to bond with the community, make a contribution and reduce your rent.
      </motion.div>
    </motion.div>
  )
}

export default MakeAnOffer
