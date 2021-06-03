import styles from '../styles/Events.module.css'
import { motion } from 'framer-motion'
import { eventsCircleVariants, eventsTitleVariants, eventTitleVariants, eventPhotoVariants, eventDateVariants } from '../animations/bookingAnimations.js'

const Happenings = () => {
  return (
    <motion.div className={styles.container}
      initial="hidden"
      animate="visible">
      <motion.div className={styles.circle} variants={eventsCircleVariants}></motion.div>
      <motion.div className={styles.title} variants={eventsTitleVariants}>what's happenning during your stay</motion.div>
      <div className={styles.task1}>
        <motion.div className={styles.taskTitle} variants={eventTitleVariants}>
          re:build gathering
        </motion.div>
        <div className={styles.photoAndDueWrapper}>
          <motion.div className={styles.photo1} variants={eventPhotoVariants}></motion.div>
          <motion.div className={styles.due} variants={eventDateVariants}>
            <span className={styles.dueDate}>6/23-6/27</span>
          </motion.div>
        </div>
      </div>
      <div className={styles.task2}>
        <motion.div className={styles.taskTitle} variants={eventTitleVariants}>
          design workshop
        </motion.div>
        <div className={styles.photoAndDueWrapper}>
          <motion.div className={styles.photo2} variants={eventPhotoVariants}></motion.div>
          <motion.div className={styles.due} variants={eventDateVariants}>
            <span className={styles.dueDate}>7/1-7/3</span>
          </motion.div>
        </div>
      </div>
      <div className={styles.task3}>
        <motion.div className={styles.taskTitle} variants={eventTitleVariants}>
          permaculture summit
        </motion.div>
        <div className={styles.photoAndDueWrapper}>
          <motion.div className={styles.photo3} variants={eventPhotoVariants}></motion.div>
          <motion.div className={styles.due} variants={eventDateVariants}>
            <span className={styles.dueDate}>7/3-7/10</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Happenings
