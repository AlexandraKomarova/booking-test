import styles from '../styles/Booking.module.css'
import ApplyBtn from './ApplyBtn'
import BuddySvg from './BuddySvg'
import FellowGuests from './FellowGuests'
import Events from './Events'
import MakeAnOffer from './MakeAnOffer'
import NextBtn from './NextBtn'
import PickUpATask from './PickUpATask'
import Purpose from './Purpose'
import ViewMoreLeftBtn from './ViewMoreLeftBtn'
import ViewMoreRightBtn from './ViewMoreRightBtn'
import { motion } from 'framer-motion'
import { viewMoreTasksBtnVariants, viewMoreEventsBtnVariants, viewMoreFellowGuestsBtnVariants, needHelpVariants, buddyIconVariants, buddyPhotoVariants, buddyNameVariants, buddyEmailVariants, nextBtnVariants } from '../animations/bookingAnimations.js'

const Booking = () => {
  return (
    <motion.div className={styles.container}
      initial="hidden"
      animate="visible">
      <div className={styles.purpose}>
        <Purpose />
      </div>
      <div className={styles.makeAnOffer}>
        <MakeAnOffer />
      </div>
      <div className={styles.applyBtn}>
        <ApplyBtn />
      </div>
      <div className={styles.pickUpATask}>
        <PickUpATask />
      </div>
      <motion.div className={styles.viewMoreTasksBtn} variants={viewMoreTasksBtnVariants}>
        <ViewMoreRightBtn />
      </motion.div>
      <div className={styles.happenings}>
        <Events />
      </div>
      <motion.div className={styles.viewMoreLeftBtn} variants={viewMoreEventsBtnVariants}>
        <ViewMoreLeftBtn />
      </motion.div>
      <div className={styles.fellowGuests}>
        <FellowGuests />
      </div>
      <motion.div className={styles.viewMoreGuestsBtn} variants={viewMoreFellowGuestsBtnVariants}>
        <ViewMoreRightBtn />
      </motion.div>
      <motion.div className={styles.needHelp} variants={needHelpVariants}>
        need help? your booking buddy is there for you!
      </motion.div>
      <motion.div className={styles.buddySvg} variants={buddyIconVariants}>
        <BuddySvg />
      </motion.div>
      <div className={styles.photoNameEmailWrapper}>
        <motion.div className={styles.photo} variants={buddyPhotoVariants}></motion.div>
        <motion.div className={styles.name} variants={buddyNameVariants}>
          Lexie Barnett
        </motion.div>
        <motion.div className={styles.email} variants={buddyEmailVariants}>
          lexiebarnett@gmail.com
        </motion.div>
      </div>
      <motion.div className={styles.next} variants={nextBtnVariants}>
        <NextBtn />
      </motion.div>
    </motion.div>
  )
}

export default Booking
