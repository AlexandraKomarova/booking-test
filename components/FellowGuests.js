import styles from '../styles/FellowGuests.module.css'
import { motion } from 'framer-motion'
import { eventsCircleVariants, eventsTitleVariants, guestNameVariants, guestStatusVariants, guestOccupationVariants, eventPhotoVariants, eventDateVariants, guestPhotoVariants, guestDateVariants } from '../animations/bookingAnimations.js'

const FellowGuests = () => {
  return (
    <motion.div className={styles.container}
      initial="hidden"
      animate="visible">
      <motion.div className={styles.circle} variants={eventsCircleVariants}></motion.div>
      <motion.div className={styles.title} variants={eventsTitleVariants}>
        who'll be around
      </motion.div>
      <div className={styles.task1}>
        <div className={styles.taskTitle}>
          <motion.div className={styles.name} variants={guestNameVariants}>
            Ida Senft
          </motion.div>
          <motion.div className={styles.status} variants={guestStatusVariants}>
            guest
          </motion.div>
          <motion.div className={styles.occupation} variants={guestOccupationVariants}>
            videographer
          </motion.div>
        </div>
        <div className={styles.photoAndDueWrapper}>
          <motion.div className={styles.photo1} variants={guestPhotoVariants}></motion.div>
          <motion.div className={styles.due} variants={guestDateVariants}>
            <span className={styles.dueDate}>6/25-7/12</span>
          </motion.div>
        </div>
      </div>
      <div className={styles.task2}>
        <div className={styles.taskTitle}>
          <motion.div className={styles.name} variants={guestNameVariants}>
            Austin Pierre
          </motion.div>
          <motion.div className={styles.status} variants={guestStatusVariants}>
            member
          </motion.div>
          <motion.div className={styles.occupation} variants={guestOccupationVariants}>
            developer
          </motion.div>
        </div>
        <div className={styles.photoAndDueWrapper}>
          <motion.div className={styles.photo2} variants={guestPhotoVariants}></motion.div>
          <motion.div className={styles.due} variants={guestDateVariants}>
            <span className={styles.dueDate}>6/14-6/29</span>
          </motion.div>
        </div>
      </div>
      <div className={styles.task3}>
        <div className={styles.taskTitle}>
          <motion.div className={styles.name} variants={guestNameVariants}>
            Nahia Abaroa
          </motion.div>
          <motion.div className={styles.status} variants={guestStatusVariants}>
            member
          </motion.div>
          <motion.div className={styles.occupation} variants={guestOccupationVariants}>
            podcaster
          </motion.div>
        </div>
        <div className={styles.photoAndDueWrapper}>
          <motion.div className={styles.photo3} variants={guestPhotoVariants}></motion.div>
          <motion.div className={styles.due} variants={guestDateVariants}>
            <span className={styles.dueDate}>7/03-7/15</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default FellowGuests
