import styles from '../styles/BuddyMobile.module.css'
import BuddySvg from './BuddySvg'
import { motion } from 'framer-motion'
import { viewMoreTasksBtnVariants, viewMoreEventsBtnVariants, viewMoreFellowGuestsBtnVariants, needHelpVariants, buddyIconVariants, buddyPhotoVariants, buddyNameVariants, buddyEmailVariants, nextBtnVariants } from '../animations/bookingAnimations.js'
import NextBtn from './NextBtn'

const BookingBuddyMobile = () => {
  return (
    <div className={styles.container}>
      <motion.div className={styles.needHelp} variants={needHelpVariants}>
        need help? your booking buddy is there for you!
      </motion.div>
      <motion.div className={styles.buddySvg} variants={buddyIconVariants}>
        <BuddySvg />
      </motion.div>
      <motion.div className={styles.photo} variants={buddyPhotoVariants}></motion.div>
      <motion.div className={styles.name} variants={buddyNameVariants}>
        Lexie Barnett
      </motion.div>
      <motion.div className={styles.email} variants={buddyEmailVariants}>
        lexiebarnett@gmail.com
      </motion.div>
      <motion.div className={styles.next} variants={nextBtnVariants}>
        <NextBtn />
      </motion.div>
    </div>
  )
}

export default BookingBuddyMobile
