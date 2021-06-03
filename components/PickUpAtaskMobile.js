import styles from '../styles/PickUpATaskMobile.module.css'
import { motion } from 'framer-motion'
import { circleVariants, titleVariants, taskTitleVariants, photoVariants, dueVariants, applyBtnVariants, mobileTasksTitleVariants, mobileTaskCircleVariants } from '../animations/bookingAnimations.js'

const PickUpAtaskMobile = () => {
  return (
    <motion.div className={styles.container} 
      initial="hidden"
      animate="visible">
      <motion.div className={styles.circle} variants={mobileTaskCircleVariants}></motion.div>
      <motion.div className={styles.title} variants={mobileTasksTitleVariants}>
        pick up a task
      </motion.div>
      <div className={styles.task1}>
        <motion.div className={styles.photo1} variants={photoVariants}></motion.div>
        <div className={styles.taskTitleAndDueDateWrapper}>
          <motion.div className={styles.taskTitle} variants={taskTitleVariants}>
            help Kate design a portfolio website
          </motion.div>
          <motion.div className={styles.due} variants={dueVariants}>
            <span className={styles.dueWord}>due: </span><span className={styles.dueDate}>7/1</span>
          </motion.div>
        </div>
      </div>
      <div className={styles.task2}>
        <div className={styles.taskTitleAndDueDateWrapper}>
          <motion.div className={styles.taskTitle} variants={taskTitleVariants}>
            help us build a sauna
          </motion.div>
          <motion.div className={styles.due} variants={dueVariants}>
            <span className={styles.dueWord}>due: </span><span className={styles.dueDate}>8/31</span>
          </motion.div>
        </div>
        <motion.div className={styles.photo2} variants={photoVariants}></motion.div>
      </div>
      <div className={styles.task3}>
        <div className={styles.taskTitleAndDueDateWrapper}>
          <motion.div className={styles.taskTitle} variants={taskTitleVariants}>
            help us plant strawberries
          </motion.div>
          <motion.div className={styles.due} variants={dueVariants}><span className={styles.dueWord}>due: </span><span className={styles.dueDate}>4/15</span></motion.div>
        </div>
        <motion.div className={styles.photo3} variants={photoVariants}></motion.div>  
      </div>
      <motion.div className={styles.btn}
        variants={applyBtnVariants}
        initial="hidden"
        animate="visible">
        <div>view more</div>
      </motion.div>
    </motion.div>
  )
}

export default PickUpAtaskMobile
